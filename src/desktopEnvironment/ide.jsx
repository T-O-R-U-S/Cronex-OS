import React from 'react';

import Taskman from './desktopEnvironment/taskMan/taskMan';
import WorldNavigationMenu from './apps/worldNavigator/worldNavContent.jsx';
import ChronicleMenu from './desktopEnvironment/chronicleMenu/menu.jsx';

class desktopEnvironment extends React.Component {
    render() {
        return(
            <div id="displayed">
            <ChronicleMenu />
            
            <Taskman />
            </div>
        )
    }
  }