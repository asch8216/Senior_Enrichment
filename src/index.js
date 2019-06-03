import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "./components/products.js";
import Home from "./components/home.js";
import Users from "./components/users.js";
// import db from "../.././models/db.js";
const app = document.getElementById("app");

class Main extends React.Component {
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
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
          id="main"
          className="rowcontainer"
        >
          <Link to="/home">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/users">Users</Link>
        </div>
        <Route path="/Home/" component={Home} />
        <Route path="/products/" component={Products} />
        <Route path="/users/" component={Users} />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  app
);

// export default Main;
