import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class CPUGraphInstance extends Component {
  componentDidMount() {
    const ctx = document.getElementById('cpu-graph__wrapper').getContext('2d');
    const cpuStats = this.props.cpuStats;

    let getChartxAxisIn = [];
    let getChartyAxisIn = [];

    for (let i = 0; i < cpuStats.length; i++) {
      getChartxAxisIn.push(cpuStats[i][0]);
      getChartyAxisIn.push(cpuStats[i][1]);
    }

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          backgroundColor: 'rgba(249, 99, 80, 0.65)',
          borderColor: 'transparent',
          label: 'CPU %',
          data: getChartyAxisIn,
          pointRadius: 0
        }],
        labels: getChartxAxisIn
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
        <h6 className="title-6">CPU Usage (%): Last 24 hrs</h6>
        <div className="cpu-graph__wrapper">
          <canvas id="cpu-graph__wrapper" height="300"></canvas>
        </div>
      </div>
    )
  }
}

registerComponent({ name: 'CPUGraphInstance', component: CPUGraphInstance });
