import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let time = new Date().toLocaleString();

class Clock extends React.Component {
  render() {
    return (
      <p>
        Hi {this.props.name}!
      </p>
    );
  }
}

export default Clock;

