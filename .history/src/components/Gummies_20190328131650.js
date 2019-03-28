import React, { Component } from "react";
import "../App.css";

// let time = new Date().toLocaleString();
let gummyCount = 0

class Gummies extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      gummyCount: 0
    };

    this.startTimer = this.startTimer.bind(this)
    
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      gummyCount: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div>
      <p>
        And as of the time you opened this app, approximately {gummyCount} have
        been savagely devoured (within the United States) 😱
      </p>
      </div>
    );
  }
}

console.log(typeof time)



export default Gummies;

