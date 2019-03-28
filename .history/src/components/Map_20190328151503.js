import React, { Component } from 'react';
import '../App.css';

// my map: https://maps.googleapis.com/maps/api/js?key=AIzaSyCrbuDGnqcHSG6nK1oo2PyiiXvsyWLZelo&callback=myMap
 
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

<div id="googleMap" style="width:100%;height:400px;"></div>



      </div>
    );
  }
}

export default App;
