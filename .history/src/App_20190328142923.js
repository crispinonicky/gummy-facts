import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import GummyCount from './components/GummyCount';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "Nick"
    }

  } 



  render() {
    return (
      <div className="App">


      <h1>
        Hi {this.state.name}!
      </h1>

        <Clock />
        <GummyCount />


      </div>
    );
  }
}

export default App;
