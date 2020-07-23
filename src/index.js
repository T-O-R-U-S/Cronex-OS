import React from 'react';
import ReactDOM from 'react-dom';
import './desktopTheme/index.css';

import Window from './desktopEnvironment/window/window';
import Taskman from './desktopEnvironment/taskMan/taskMan';
import WorldNavigationMenu from './apps/worldNavigator/worldNavContent.jsx';

import * as serviceWorker from './serviceWorker';

var i = 0;

ReactDOM.render(
  <React.StrictMode>
    <Window name='worldView' closeButton='invisible' title="WorldView.COE" windowNum={i++} content={<WorldNavigationMenu />} />
    <Window name='worldView' closeButton='invisible' title="WorldView two" windowNum={i++} style={{left : '450px'}} content={<WorldNavigationMenu />} />
    <Taskman />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
