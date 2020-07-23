import React from "react";
import UiKitButton from '../../systemUIKit/iconButton';
import "./taskman.css";
var icon = require('../../systemUIKit/images/icons/logo512.png');

function Taskman(props) {
    return (
      <div id="taskMan">
        <UiKitButton src={icon}>Hello world!</UiKitButton>
      </div>
    );
  }

export default Taskman;