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
      <div className="Map">

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrbuDGnqcHSG6nK1oo2PyiiXvsyWLZelo&callback=myMap"></script>

      </div>
    );
  }
}

export default App;
