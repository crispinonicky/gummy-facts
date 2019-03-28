// import React, { Component } from "react";
// import "../App.css";

// // let time = new Date().toLocaleString();
// let gummyCount = 0

// class Gummies extends React.Component {
//   constructor(props) {

//     super(props)
//     this.state = {
//       gummyCount: 0
//     };

//     this.startTimer = this.startTimer.bind(this)

//   }

//   startTimer() {
//     this.setState({
//       time: this.state.time
//     })

//     this.timer = setInterval(() => this.setState({

//     }), 1);
//   }

//   render() {
//     return (
//       <div>
//       <p>
//         And as of the time you opened this app, approximately {gummyCount} have
//         been savagely devoured (within the United States) 😱
//       </p>
//       </div>
//     );
//   }
// }

// console.log(typeof time)



// export default Gummies;


const React = require('react')

// class Gummies extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time: 0,
//       isOn: false,
//       start: 0
//     }
//     this.startTimer = this.startTimer.bind(this)

//   }

//   startTimer() {

//     this.setState({
//       isOn: true,
//       time: this.state.time,
//       start: Date.now() - this.state.time
//     })

//     this.timer = setInterval(() => this.setState({
//       time: Date.now() - this.state.start
//     }), 1000);

//   }
  


//   render() {
//     console.log(typeof this.state.time)
    

//     let start = (this.state.time == 0) ?
//       <button onClick={this.startTimer}>start</button> :
//       null
//     return(
//       <div>
//         <h3>timer: {(this.state.time)}</h3>
//         {start}

//       </div>

//     )
//   }

  
// }


// export default Gummies;


class Gummies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0 
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>
        And ever since you opened this page, approximately {this.state.seconds} 
        <br/>
        gummy bears have been given life 🐻🐻🐻🐻🐻🐻🐻
        </p>
      </div>
    );
  }
}

export default Gummies;



