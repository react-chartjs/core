import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { LineChart } from '@react-chartjs/core';

export class Dash extends React.Component<RouteComponentProps, { conf: any }> {

  constructor(props: any) {
    super(props);
    this.state = {
      conf: {
        data: {
          datasets: [{
            backgroundColor: 'rgb(255, 99, 132',
            borderColor: 'rgb(255, 159, 64)',
            data: [],
            fill: false,
            label: '@hieunv/react-scripts'
          }],
          labels: []
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
            text: '@hieunv/react-scripts npm-stats'
          }
        },
        width: '100%'
      }
    };
  }

  public async componentWillMount() {
    try {
      const response = await fetch('https://api.npmjs.org/downloads/range/last-month/@hieunv/react-scripts');
      const json = await response.json();
      const data = json.downloads.map((x: any) => x.downloads);
      const days = json.downloads.map((x: any) => x.day);
      this.setState((state) => {
        state.conf.data.datasets[0].data = data;
        state.conf.data.labels = days;
        return state;
      });
    }
    catch (e) {
      return;
    }
  }

  public render(): React.ReactNode {
    return <LineChart type={'line'} {...this.state.conf}/>;
  }
}
