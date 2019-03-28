import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Gummies from './components/Gummies';


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


      <p>
        Hi {this.state.name}!
      </p>

        <Clock />

      </div>
    );
  }
}

export default App;
