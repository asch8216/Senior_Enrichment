import React from "react";

class Users extends React.Component {
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
    return "users";
  }
}

export default Users;
