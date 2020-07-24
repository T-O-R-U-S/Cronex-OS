import React from "react";
import "./UIkit.css";
class UiKitButton extends React.Component {
  render(){
    return (
      <div id="iconButton">
          <button onClick={this.props.function}><img src={this.props.src} alt=""/></button>
      </div>
    );
  }
}

export default UiKitButton;