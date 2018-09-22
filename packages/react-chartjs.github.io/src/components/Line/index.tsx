import * as React from 'react';
import { LineChart, ReactChart } from '@react-chartjs/core';
import { RouteComponentProps } from '@reach/router';

export class Line extends React.Component<RouteComponentProps, { conf: any }> {

  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      conf: {
        width: '100%',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132',
            borderColor: 'rgb(255, 159, 64)',
            fill: false,
            data: [
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor()
            ]
          }, {
            label: 'My Second dataset',
            backgroundColor: 'rgb(255, 205, 86)',
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
            data: [
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor()
            ]
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Chart.js Line Chart - Logarithmic'
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              type: 'logarithmic'
            }]
          }
        }
      }
    };
  }

  static randomScalingFactor() {
    return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
  };

  render(): React.ReactNode {
    return <LineChart type={'line'} {...this.state.conf}/>;
  }
}
