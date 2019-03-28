import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';


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
