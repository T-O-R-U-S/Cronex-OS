import React from "react";
import { UiKitButton, Window } from "../../../systemUIKit/UIkit.jsx";

import "./worldNav.css";

import ScribblePad from "../scribblePad/scribblePad.jsx";

var icon = require("../../../systemUIKit/images/icons/scribbleBoard.png");

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
    <>
      
        <div id="buttonContainer">
          <span className='worldNavButton'>
            <UiKitButton  function={openScribble} src={icon} />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
            <UiKitButton  />
          </span>
        </div>
        <div>
        <p id="introHeader">Welcome to the world nav menu!</p>
        <br />
        <h6 id="introParagraph">From here, you can access the world inside your computer, all with the help of Cronex OS. From this menu, you will be able to open and explore new applications and have new experiences!</h6>
        </div>
    </>
    );
  }
}

var exportedItem = [WorldNavigationMenu];

export default WorldNavigationMenu;
export { exportedItem };
