import React from 'react';
import ReactDOM from 'react-dom';
import './desktopTheme/index.css';

import DesktopEnvironment from './desktopEnvironment/ide.jsx'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DesktopEnvironment />
    <div id="apps"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
