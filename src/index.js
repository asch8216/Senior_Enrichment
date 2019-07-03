import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Students from "./components/students.js";
import Campus from "./components/campus.js";

// import db from "../.././models/db.js";
const app = document.getElementById("app");

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // increaseCount() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });

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
          <Link to="/student">Students</Link>

          <Link to="/campus">Campuses</Link>
        </div>
        <Route path="/student/" component={Students} />
        <Route path="/campus/" component={Campus} />
        {/* <Route path="/campus/:id" component={??} /> */}
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

export default Main;
