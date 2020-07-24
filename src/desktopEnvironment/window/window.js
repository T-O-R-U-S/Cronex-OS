import React from "react";
import "./App.css";

class Window extends React.Component {
  super(props){};
  render() {
    return(
      <div className="window">
    <div id={this.props.name} className={this.props.windowNum}>
      <span className="topBar">
          <p className="title">{this.props.title}</p>
          <button id={this.props.closeButton} className="buttons">X</button>
          <button id="fullScreen" className="buttons">□</button>
          <button id="minimizeApp" className="buttons">_</button>
      </span>
      <div className="contents">
        {this.props.content}
      </div>
    </div>
    </div>
    )
  }
}
export default Window;
