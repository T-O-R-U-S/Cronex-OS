import React from "react";

import ChronicleMenu from "./chronicleMenu/menu.jsx";
import { Window } from "../systemUIKit/UIkit.jsx";
import Taskman from "./taskMan/taskMan.js";


import WorldNavigationMenu from "./sysapp/worldNavigator/worldNavContent.jsx";
import ScribblePad from "./sysapp/scribblePad/scribblePad.jsx";


var winKey = 'WINDOW'

function winid(){
  return(winKey+Math.floor(Math.random()*10000)+1)
}

var customtheme = {
  marginLeft: "80px",
};
class desktopEnvironment extends React.Component {
  constructor(props){
    super(props);
    this.state={apps:[<ScribblePad />, <ScribblePad />]}
  }
  render() {
    var windows = this.state.apps.map((window) =>
    <Window key={winid()} content={window} winID={winid()} title={window.title}/>
  );
    return (
      <div id="displayed">
        <ChronicleMenu />
        <div id="sysapps">
          <Window
            title="wnm.COE"
            noCloseButton={true}
            content={<WorldNavigationMenu />}
            customTheme={customtheme}
            winKey={-1}
            specialClass="worldNvMenu"
          />
        </div>
        <div id="apps">
          {windows}
        </div>
        <Taskman />
      </div>
    );
  }
}

export default desktopEnvironment;
