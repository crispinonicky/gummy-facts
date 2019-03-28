import React, { Component } from "react";
import "../App.css";

let time = new Date().toLocaleString();
let timeInt = parseInt(time).toString

class Clock extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      time: new Date().toLocaleString(),
    };
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
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <div>
      <p>
        The time is {this.state.time}
      </p>
      </div>
    );
  }
}

console.log(typeof time)

export default Clock;

