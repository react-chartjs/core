import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { PieChart } from '@react-chartjs/core/dist';
import * as css from './pie.m.scss';

export class Pie extends React.Component<RouteComponentProps, { pie: any }> {
  private static randomScalingFactor(): number {
    return Math.round(Math.random() * 100);
  };
  private readonly chartColors: any;
  private readonly colorNames: any;

  constructor(props: any) {
    super(props);
    this.randomize = this.randomize.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.chartColors = {
      blue: 'rgb(54, 162, 235)',
      green: 'rgb(75, 192, 192)',
      grey: 'rgb(201, 203, 207)',
      orange: 'rgb(255, 159, 64)',
      purple: 'rgb(153, 102, 255)',
      red: 'rgb(255, 99, 132)',
      yellow: 'rgb(255, 205, 86)'
    };
    this.colorNames = Object.keys(this.chartColors);
    this.state = {
      pie: {
        data: {
          datasets: [{
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
            ],
            data: [
              Pie.randomScalingFactor(),
              Pie.randomScalingFactor(),
              Pie.randomScalingFactor(),
              Pie.randomScalingFactor(),
              Pie.randomScalingFactor()
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
          legend: {
            display: true,
            position: 'top',
          },
          responsive: true
        },
        width: '100%'
      },
    };
  }


  public render(): React.ReactNode {
    return <div className={css.pie}>
      <button onClick={this.randomize}>Randomize Data</button>
      <button onClick={this.add}>Add Data Set</button>
      <button onClick={this.remove}>Remove Data Set</button>
      <PieChart {...this.state.pie}/>
    </div>;
  }

  private randomize($event: React.MouseEvent<HTMLButtonElement>): void {
    this.setState(state => {
      state.pie.data.datasets.forEach((dataset: any) => {
        dataset.data = dataset.data.map(() => Pie.randomScalingFactor());
      });
      return state;
    });
  }

  private add($event: React.MouseEvent<HTMLButtonElement>): void {
    const newDataset = {
      backgroundColor: new Array<string>(),
      data: new Array<number>(),
      label: `New dataset ${this.state.pie.data.datasets.length}`,
    };
    for (let index = 0; index < this.state.pie.data.labels.length; ++index) {
      newDataset.data.push(Pie.randomScalingFactor());

      const colorName = this.colorNames[index % this.colorNames.length];
      const newColor = this.chartColors[colorName];
      newDataset.backgroundColor.push(newColor);
    }

    this.setState(state => state.pie.data.datasets.push(newDataset));
  }

  private remove($event: React.MouseEvent<HTMLButtonElement>): void {
    this.setState(state => state.pie.data.datasets.splice(0, 1));
  }
}
