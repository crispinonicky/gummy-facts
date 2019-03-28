import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import GummyCount from './components/GummyCount';
import Map from './components/Map';


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


        <Clock />
        <GummyCount />
        <Map />


      </div>
    );
  }
}

export default App;
