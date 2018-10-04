import * as React from 'react';
import classNames from 'classnames';
import { Link } from '@reach/router';
import './Nav.scss';

export class Nav extends React.PureComponent {
  public render(): React.ReactNode {
    return <aside id="mdc-drawer" className={classNames('mdc-drawer', 'mdc-drawer--dismissible')}>
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          <Link className={classNames('mdc-list-item', 'mdc-list-item--activated')} to="pie" aria-selected="true">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">pie_chart</i>
            <span className="mdc-list-item__text">Pie</span>
          </Link>
          <Link className="mdc-list-item" to="line">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">multiline_chart</i>
            <span className="mdc-list-item__text">Line</span>
          </Link>
          <Link className="mdc-list-item" to="#">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">drafts</i>
            <span className="mdc-list-item__text">Drafts</span>
          </Link>
        </nav>
      </div>
    </aside>;
  }
}
