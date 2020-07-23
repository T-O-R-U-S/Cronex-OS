import React from "react";
import "./App.css";

function Window(props) {
  return (
    <div id={props.name} className="window">
      <span className="topBar">
          <p className="title">{props.title}</p>
          <button id={props.closeButton} className="buttons">X</button>
          <button id="fullScreen" className="buttons">□</button>
          <button id="minimizeApp" className="buttons">_</button>
      </span>
      <div className="contents">
        {props.content}
      </div>
    </div>
  );
}

export default Window;
