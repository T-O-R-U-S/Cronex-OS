import React from 'react';
import ReactDOM from 'react-dom';
import './desktopTheme/index.css';

import Window from './systemUIKit/UIkit.jsx';

import DesktopEnvironment from './desktopEnvironment/ide.jsx'

import * as serviceWorker from './serviceWorker';
import ScribblePad from './desktopEnvironment/sysapp/scribblePad/scribblePad';

var winKey = 'WINDOW'

ReactDOM.render(
  <React.StrictMode>
    <DesktopEnvironment />
    <div id="apps">
      {ScribblePad ? <Window title="scribPad.COE" content={<ScribblePad />} winID={winKey+Math.random()*10000000000000000}/> : null}
      <Window title="scribPad.COE" content={<ScribblePad />} winID={winKey+Math.random()}/>
      <Window title="scribPad.COE" content={<ScribblePad />} winID={winKey+Math.random()}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
