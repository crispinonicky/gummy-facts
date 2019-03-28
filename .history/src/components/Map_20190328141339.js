import React, { Component } from 'react';
import '../App.css';



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
        <GummyCount />


      </div>
    );
  }
}

export default App;
