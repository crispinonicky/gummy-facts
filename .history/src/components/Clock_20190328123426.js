import React, { Component } from "react";
import "../App.css";

let time = new Date().toLocaleString();

class Clock extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      time: new Date().toLocaleString(),
      name: "Nick"
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

export default Clock;

