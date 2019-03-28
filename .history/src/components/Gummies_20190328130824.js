import React, { Component } from "react";
import "../App.css";

let time = new Date().toLocaleString();
let gummies = 69

class Gummies extends React.Component {
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
        And as of the time you opened this app, approximately {gummies} have
        been savagely devoured (within the United States).
      </p>
      </div>
    );
  }
}

console.log(typeof time)



export default Gummies;

