import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">


      <p>
        Hi {this.props.name}!
      </p>

        <Clock />

      </div>
    );
  }
}

export default App;
