import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class IPV6GraphInstance extends Component {
  componentDidMount() {
    const ctx = document.getElementById('ipv6-graph__wrapper').getContext('2d');
    const inIpv4 = this.props.netv6Stats.in;
    const outIpv4 = this.props.netv6Stats.out;
    const private_inIpv4 = this.props.netv6Stats.private_in;
    const private_outIpv4 = this.props.netv6Stats.private_out;

    let getChartxAxisIn = [];
    let getChartyAxisIn = [];
    let getChartyAxisInTooltip = [];

    let getChartxAxisOut = [];
    let getChartyAxisOut = [];
    let getChartyAxisOutTooltip = [];

    let getChartxAxisPrivateIn = [];
    let getChartyAxisPrivateIn = [];
    let getChartyAxisPrivateInTooltip = [];

    let getChartxAxisPrivateOut = [];
    let getChartyAxisPrivateOut = [];
    let getChartyAxisPrivateOutTooltip = [];

    for (let i = 0; i < inIpv4.length; i++) {
      getChartxAxisIn.push(inIpv4[i][0]);
      getChartyAxisIn.push((inIpv4[i][1] / 1024).toFixed(2));
      getChartyAxisInTooltip.push(Skawe.utils.timeZoneFormat(inIpv4[i][0]));
    }

    for (let i = 0; i < outIpv4.length; i++) {
      getChartxAxisOut.push(Skawe.utils.timeZoneFormat(outIpv4[i][0]));
      getChartyAxisOut.push((outIpv4[i][1] / 1024).toFixed(2));
      getChartyAxisOutTooltip.push(Skawe.utils.timeZoneFormat(outIpv4[i][0]));
    }

    for (let i = 0; i < private_inIpv4.length; i++) {
      getChartxAxisPrivateIn.push(Skawe.utils.timeZoneFormat(private_inIpv4[i][0]));
      getChartyAxisPrivateIn.push((private_inIpv4[i][1] / 1024).toFixed(2));
      getChartyAxisPrivateInTooltip.push(Skawe.utils.timeZoneFormat(private_inIpv4[i][0]));
    }

    for (let i = 0; i < private_outIpv4.length; i++) {
      getChartxAxisPrivateOut.push(Skawe.utils.timeZoneFormat(private_outIpv4[i][0]));
      getChartyAxisPrivateOut.push((private_outIpv4[i][1] / 1024).toFixed(2));
      getChartyAxisPrivateOutTooltip.push(Skawe.utils.timeZoneFormat(private_outIpv4[i][0]));
    }

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(0, 178, 89, 0.65)',
            borderColor: 'transparent',
            label: 'Public Inbound',
            data: getChartyAxisIn,
            pointRadius: 0,
          },
          {
            backgroundColor: 'rgba(3, 206, 104, 0.65)',
            borderColor: 'transparent',
            label: 'Public Outbound',
            data: getChartyAxisOut,
            pointRadius: 0,
          },
          {
            backgroundColor: 'rgba(108, 117, 125, 0.65)',
            borderColor: 'transparent',
            label: 'Private Inbound',
            data: getChartyAxisPrivateIn,
            pointRadius: 0,
          },
          {
            backgroundColor: 'rgba(183, 189, 193, 0.65)',
            borderColor: 'transparent',
            label: 'Private Outbound',
            data: getChartyAxisPrivateOut,
            pointRadius: 0,
          },
        ],
        labels: getChartxAxisIn,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'x-axis'
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            type: 'time',
            time: {
              unitStepSize: 3,
              displayFormats: {
                quarter: 'HH:MM'
              }
            },
            ticks: {
              stepSize: 2 // <----- This prop sets the stepSize
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              // forces step size to be 5 units
              stepSize: 0.5 // <----- This prop sets the stepSize
            },
            gridLines: {
              // borderDash: [6, 4],
              // color: "#dee2e6"
              display: false
            },
          }]
        }
      }
    });
  }

  render () {
    return (
      <div className="section-distributions bg-light mb-1">
        <h6 className="title-6">IPv6 Traffic (Kibit/s): Last 24 hrs</h6>
        <div className="ipv6-graph__wrapper">
          <canvas id="ipv6-graph__wrapper" height="300"></canvas>
        </div>
      </div>
    )
  }
}

Skawe.registerComponent('IPV6GraphInstance', IPV6GraphInstance);
