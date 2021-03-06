import * as React from 'react';
import { render } from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router';
import { Home } from './components/Home';


render(<Router>
  <Home path="/*"/>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
