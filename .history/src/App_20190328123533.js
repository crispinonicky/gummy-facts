import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';


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
        Hi {this.props.name}!
      </p>

        <Clock />

      </div>
    );
  }
}

export default App;
