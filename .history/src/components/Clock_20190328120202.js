import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let time = new Date().toLocaleString();

class Clock extends React.Component {
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

