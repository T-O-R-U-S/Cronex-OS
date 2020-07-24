import React from "react";
import { UiKitButton, Window } from "../../../systemUIKit/UIkit.jsx";

import "./worldNav.css";

import ScribblePad from "../scribblePad/scribblePad.jsx";

var icon = require("../../../systemUIKit/images/icons/scribbleBoard.png");
var floatRight = {
  float: "right",
};

function openScribble() {
  console.log("pressed");
  React.lazy(() => import("../scribblePad/scribblePad.jsx"));

  class scribWindow extends React.Component {
    render() {
      return (
        (<Window title="scribPad.COE" content={<ScribblePad />} />),
        document.getElementById("apps")
      );
    }
  }
  exportedItem.push(scribWindow);
}

class WorldNavigationMenu extends React.Component {
  render() {
    return (
      <div id="contentContainer">
        <div id="buttonContainer">
          <span className='worldNavButton'>
            <UiKitButton className='worldNavButton' function={openScribble} src={icon} />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
            <UiKitButton className='worldNavButton' />
          </span>
        </div>
        <p style={floatRight}>Welcome to the world nav menu!</p>
      </div>
    );
  }
}

var exportedItem = [WorldNavigationMenu];

export default WorldNavigationMenu;
export { exportedItem };
