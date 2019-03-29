const React = require('react')

class GummyCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0,
    };
  }
 
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
<div>
      <div className = "Count">
      <div className = "gray-box">
        <p>
        And ever since you opened this page, approximately 
        <br/>
        <h1>{Math.round(this.state.seconds * 11.57)}</h1>
        <br/>
        Haribo gummy bears have been given life 🐻🐻🐻🐻🐻🐻🐻
        </p>
        <h4>
          Please do not eat them all, or else you will probably get sick.
        </h4>
        </div>
      </div>
      </div>
    );
  }
}

export default GummyCount;



