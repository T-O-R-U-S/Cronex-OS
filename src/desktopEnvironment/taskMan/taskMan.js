import React from "react";
import { UiKitButton } from '../../systemUIKit/UIkit.jsx';
import "./taskman.css";
var icon = require('../../systemUIKit/images/icons/worldNavIco.png');

function Taskman(props) {
    return (
      <div id="taskMan">
        <UiKitButton src={icon}/>
        <p>Application Viewer</p>
      </div>
    );
  }

export default Taskman;