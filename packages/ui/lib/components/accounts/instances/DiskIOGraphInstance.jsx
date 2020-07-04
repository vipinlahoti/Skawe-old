import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class DiskIOGraphInstance extends Component {
  componentDidMount() {
    const ctx = document.getElementById('disk-graph__wrapper').getContext('2d');
    const io = this.props.ioStats.io;
    const swap = this.props.ioStats.swap;

    let getChartxAxisIO = [];
    let getChartyAxisIO = [];

    let getChartxAxisSwap = [];
    let getChartyAxisSwap = [];

    for (let i = 0; i < io.length; i++) {
      getChartxAxisIO.push(io[i][0]);
      getChartyAxisIO.push((io[i][1] / 1024));
    }

    for (let i = 0; i < swap.length; i++) {
      getChartxAxisSwap.push(Skawe.utils.timeZoneFormat(swap[i][0]));
      getChartyAxisSwap.push((swap[i][1] / 1024));
    }

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            backgroundColor: 'rgba(253, 126, 20, 0.65)',
            borderColor: 'transparent',
            label: 'I/O Rate',
            data: getChartyAxisIO,
            pointRadius: 0,
          },
          {
            backgroundColor: 'rgba(253, 153, 69, 0.65)',
            borderColor: 'transparent',
            label: 'Swap Rate',
            data: getChartyAxisSwap,
            pointRadius: 0,
          }
        ],
        labels: getChartxAxisIO,
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
        <h6 className="title-6">Disk IO (blocks/s): Last 24 hrs</h6>
        <div className="disk-graph__wrapper">
          <canvas id="disk-graph__wrapper" height="300"></canvas>
        </div>
      </div>
    )
  }
}

Skawe.registerComponent('DiskIOGraphInstance', DiskIOGraphInstance);
