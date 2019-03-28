import React, { Component } from 'react';
import '../App.css';

// my map: https://maps.googleapis.com/maps/api/js?key=AIzaSyCrbuDGnqcHSG6nK1oo2PyiiXvsyWLZelo&callback=myMap
 
class Map extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: "Nick"
    }

  }



  render() {
    return (
      <div className="Map">

<div id="googleMap">

</div>



      </div>
    );
  }
}

export default Map;
