import React from "react";
import "./UIkit.css";
export class UiKitButton extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="iconButton">
          <button onClick={this.props.function} style={this.props.customTheme}><img src={this.props.src} alt="" /></button>
      </div>
    );
  }
}

export class Window extends React.Component {
  render() {
    return (
      <div id='winContainer' className={this.props.specialClass ? `${this.props.specialClass}` : this.props.winID} style={this.props.customTheme}>
        <div>
          <span className="topBar" style={this.props.topBarTheme}>
            <p className="title">{this.props.content.title}</p>
            
            {this.props.noCloseButton ? null : (
              <button id="leaveApp" className="buttons" onClick={()=>{
                document.querySelector(`.${this.props.winID}`).remove()
              }}>
                X
              </button>
            )}
            <button id="fullScreen" className="buttons">
              □
            </button>
            <button id="minimizeApp" className="buttons">
              _
            </button>
          </span>
          <div className="contents" style={this.props.theme}>{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Window;