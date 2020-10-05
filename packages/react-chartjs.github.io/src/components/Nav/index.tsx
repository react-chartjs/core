import * as React from 'react';
import { Drawer } from '@hieunv/react-mdc';
import classNames from 'classnames';
import { Link } from '@reach/router';
import './Nav.scss';

export class Nav extends React.PureComponent {
  public render(): React.ReactNode {
    return <Drawer dismissible={true}>
        <nav className="mdc-list">
          <Link className={classNames('mdc-list-item', 'mdc-list-item--activated')} to="dash" aria-selected="true">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">dashboard</i>
            <span className="mdc-list-item__text">Dash</span>
          </Link>
          <Link className="mdc-list-item" to="pie">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">pie_chart</i>
            <span className="mdc-list-item__text">Pie</span>
          </Link>
          <Link className="mdc-list-item" to="line">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">multiline_chart</i>
            <span className="mdc-list-item__text">Line</span>
          </Link>
        </nav>
    </Drawer>
  }
}
