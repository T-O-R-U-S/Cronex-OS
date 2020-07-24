import React from "react";
import {UiKitButton, Window} from "../../../systemUIKit/UIkit.jsx";
import ReactDOM from "react-dom";
import ScribblePad from "../scribblePad/scribblePad.jsx";

import $ from 'jquery';
window.jQuery = window.$ = $;


var icon = require("../../../systemUIKit/images/icons/scribbleBoard.png");

function openScribble() {
  ReactDOM.render(
    <Window
      title="scribPad.COE"
      content={<ScribblePad />}
    />,
    document.getElementById("apps")
  );
}

var style = {
  width: "200px",
  backgroundColor: "blue",
  display: "inline-block",
  justifyContent: "center",
};

function WorldNavigationMenu() {
  return (
    <div>
      <UiKitButton function={openScribble} src={icon} customTheme={style} />
      <UiKitButton />
      <UiKitButton />
    </div>
  );
}

export default WorldNavigationMenu;
