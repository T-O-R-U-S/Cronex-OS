import React from "react";
import "./App.css";

function App() {
  return (
    <div id='fullWindowEXPLORER'>
      <span class="topBar">
          <p id="title">World View Menu</p>
          <button id="leaveApp" class="Buttons">X</button>
          <button id="fullScreen" class="Buttons">□</button>
          <button id="minimizeApp" class="Buttons">_</button>
      </span>
    </div>
  );
}

export default App;
