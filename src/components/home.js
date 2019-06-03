import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return "We have openings for many product managers";
  }
}

export default Home;
