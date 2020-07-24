import React from "react";

import ChronicleMenu from './chronicleMenu/menu.jsx';
import Window from '../systemUIKit/UIkit.jsx';
import Taskman from './taskMan/taskMan.js';

import WorldNavigationMenu from './sysapp/worldNavigator/worldNavContent.jsx';

var customtheme ={
    marginLeft: '80px'
};
class desktopEnvironment extends React.Component {
  render() {
    return (
      <div id="displayed">
        <ChronicleMenu />
        <div id="sysapps">
            <Window title="wnm.COE" closeButton='invisible' content={<WorldNavigationMenu />} customTheme={customtheme} />
        </div>
        <Taskman />
      </div>
    );
  }
}

export default desktopEnvironment