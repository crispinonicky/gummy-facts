const React = require('react')

class Gummies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0,
      gummyRatio: 115.740740741
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    return (

      <div>
        <p>
        And ever since you opened this page, approximately {this.state.seconds * 115.740740741} 
        <br/>
        gummy bears have been given life 🐻🐻🐻🐻🐻🐻🐻
        </p>
      </div>
    );
  }
}

export default Gummies;



