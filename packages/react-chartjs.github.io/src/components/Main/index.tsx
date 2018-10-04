import * as React from 'react';
import classNames from 'classnames';
import './Main.scss';

export class Main extends React.PureComponent {
  public render(): React.ReactNode {
    return <main id="main-content" className={classNames('main-content')}>
      <div className={classNames('mdc-top-app-bar--fixed-adjust')}>
        {this.props.children}
      </div>
    </main>;
  }
}
