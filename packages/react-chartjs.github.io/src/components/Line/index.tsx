import * as React from 'react';
import { LineChart, ReactChart } from '@react-chartjs/core';
import { RouteComponentProps } from '@reach/router';

export class Line extends React.Component<RouteComponentProps, { conf: any }> {
  private static randomScalingFactor() {
    return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
  };

  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      conf: {
        data: {
          datasets: [{
            backgroundColor: 'rgb(255, 99, 132',
            borderColor: 'rgb(255, 159, 64)',
            data: [
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor()
            ],
            fill: false,
            label: 'My First dataset'
          }, {
            backgroundColor: 'rgb(255, 205, 86)',
            borderColor: 'rgb(75, 192, 192)',
            data: [
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor(),
              Line.randomScalingFactor()
            ],
            fill: false,
            label: 'My Second dataset'
          }],
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              type: 'logarithmic'
            }]
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart - Logarithmic'
          }
        },
        width: '100%'
      }
    };
  }

  public render(): React.ReactNode {
    return <LineChart type={'line'} {...this.state.conf}/>;
  }
}
