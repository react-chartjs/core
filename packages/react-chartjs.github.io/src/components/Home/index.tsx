import * as React from 'react';
import { Nav } from '../Nav';
import { RouteComponentProps, Router } from '@reach/router';
import classNames from 'classnames';
import { Header } from '@hieunv/react-mdc';
import { Main } from '../Main';
import { MDCTopAppBar } from '@material/top-app-bar';
// @ts-ignore
import { MDCDrawer } from '@material/drawer';
import { Pie } from '../Pie';
import { Line } from '../Line';
import { Dash } from '../Dash';

export class Home extends React.PureComponent<RouteComponentProps> {
  private topAppBar: MDCTopAppBar | undefined;
  private drawer: MDCDrawer;

  public componentDidMount(): void {
    this.drawer = MDCDrawer.attachTo(document.getElementById('mdc-drawer'));
    this.drawer.open = true;
    this.topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar') as Element);
    // @ts-ignore
    this.topAppBar.setScrollTarget(document.getElementById('main-content'));
    this.topAppBar.listen('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
  }

  public componentWillUnmount(): void {
    // @ts-ignore
    this.topAppBar.destroy();
  }

  public render(): React.ReactNode {
    return <div>
      <Nav/>
      <div className={classNames('mdc-drawer-app-content')}>
        <Header>react-chartjs</Header>
        <Main>
          <Router>
            <Dash path="/"/>
            <Dash path="dash"/>
            <Pie path="pie"/>
            <Line path="line"/>
          </Router>
        </Main>
      </div>
    </div>;
  }
}
