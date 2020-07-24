import React from "react";
import './menu.css';

class ChronicleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div>
    <nav id="cMenu">
    <p>time: {this.state.date.toLocaleTimeString()}</p>
    </nav>
    </div>
    )
  }
}

export default ChronicleMenu;
