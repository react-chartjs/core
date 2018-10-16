import * as React from 'react';
import { Chart, ChartConfiguration } from 'chart.js';

export class ReactChart extends React.Component<any & ChartConfiguration> {
  readonly ref: React.RefObject<HTMLCanvasElement>;
  private chart: Chart;

  constructor(props: ChartConfiguration) {
    super(props);
    this.ref = React.createRef();
  }

  componentWillReceiveProps(nextProps: ChartConfiguration) {
    this.chart.update();
  }

  componentDidMount(): void {
    this.chart = new Chart(this.ref.current.getContext('2d'), {
      type: this.props.type,
      data: this.props.data,
      options: this.props.options
    });
  }

  componentWillUnmount(): void {
    this.chart.destroy();
  }

  render(): React.ReactNode {
    let _props: any = {};
    for (let name in this.props) {
      if (this.props.hasOwnProperty(name)) {
        // all properties which is not 'data', 'type' or 'options'
        if (['data', 'options', 'type'].indexOf(name) === -1) {
          _props[name] = this.props[name];
        }
      }
    }

    return <canvas ref={this.ref} {..._props} />;
  }
}

//     type ChartType = 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie';
export class LineChart extends React.Component<any & ChartConfiguration> {
  render() {
    return <ReactChart type={'line'} data={this.props.data} options={this.props.options}/>;
  }
}

export class PieChart extends React.Component<any & ChartConfiguration> {
  render() {
    return <ReactChart type={'pie'} {...this.props}/>;
  }
}

