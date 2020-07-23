import React from "react";
import "./App.css";

function App(props) {
  return (
    <div id={props.name} className="window">
      <span className="topBar">
          <p className="title">World View Menu</p>
          <button id={props.closeButton} className="buttons">X</button>
          <button id="fullScreen" className="buttons">□</button>
          <button id="minimizeApp" className="buttons">_</button>
      </span>
      <div className="contents">
        <p>

        </p>
      </div>
    </div>
  );
}

export default App;
