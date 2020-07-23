import React from "react";
import "./buttonCSS.css";

function UiKitButton(props) {
    return (
      <div id="iconButton">
          <button><img src={props.src} alt=""/></button>
      </div>
    );
  }

export default UiKitButton;