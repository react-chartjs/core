import * as React from 'react';
import { render } from 'react-dom';
import 'reset.css/reset.css';
import 'normalize.css/normalize.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router';
import { Pie } from './components/Pie';


render(<Router>
  <App path="/"/>
  <Pie path="pie"/>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
