import React, { Component } from "react";
import "../App.css";

let time = new Date().toLocaleString();

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  

  render() {
    return (
      <div>
      <p>
        The time is {time}
      </p>
      </div>
    );
  }
}

export default Clock;

