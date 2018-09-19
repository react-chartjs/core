import * as React from 'react';
import * as css from './App.scss';
import { LineChart, PieChart } from '@react-chartjs/core';
import { Link, RouteComponentProps } from '@reach/router';

class App extends React.Component<RouteComponentProps, any> {
  readonly pie: any;
  readonly line: any;

  constructor(props: any) {
    super(props);
    this.state = {
      pie: {
        width: '100%',
        data: {
          datasets: [{
            data: [
              App.randomScalingFactor(),
              App.randomScalingFactor(),
              App.randomScalingFactor(),
              App.randomScalingFactor(),
              App.randomScalingFactor(),
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
            ],
            label: 'Dataset 1',
          }],
          labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue',
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: true,
            position: 'left',
          },
        },
      },
    };

    this.line = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132',
          borderColor: 'rgb(255, 159, 64)',
          fill: false,
          data: [
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
          ],
        }, {
          label: 'My Second dataset',
          backgroundColor: 'rgb(255, 205, 86)',
          borderColor: 'rgb(75, 192, 192)',
          fill: false,
          data: [
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
            App.lineRandomScalingFactor(),
          ],
        }],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Line Chart - Logarithmic',
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            type: 'logarithmic',
          }],
        },
      },
    };
  }

  static lineRandomScalingFactor() {
    return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
  };

  static randomScalingFactor() {
    return Math.round(Math.random() * 100);
  };

  onClick($event: any): void {
    console.log($event);
    this.setState((state: any) => state.pie.data.datasets[0].data = [
      App.randomScalingFactor(),
      App.randomScalingFactor(),
      App.randomScalingFactor(),
      App.randomScalingFactor(),
      App.randomScalingFactor(),
    ]);
  }

  render() {
    return (
      <div className={css['App']}>
        <Link to="pie">Pie</Link>
        <PieChart {...this.state.pie}/>
        <LineChart {...this.line}/>
      </div>
    );
  }
}

export default App;
