import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store.js";
import Students from "./components/students.js";
import Campus from "./components/campus.js";
import AddCampus from "./components/addCampus.js";
import AddStudent from "./components/addStudent.js";
import SingleStudent from "./components/SingleStudent.js";
import SingleCampus from "./components/SingleCampus.js";

// import db from "../.././models/db.js";
const app = document.getElementById("app");

class Main extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {};
  }

  render() {
    return (
      <div className="play">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
          id="main"
        >
          <Link to="/student">Students</Link>

          <Link to="/campus">Campuses</Link>

          <Link to="/addcampus">Add A Campus</Link>

          <Link to="/addstudent">Add A Student</Link>
        </div>
        <Route exact path="/student/" component={Students} />
        <Route exact path="/campus/" component={Campus} />
        <Route path="/addcampus/" component={AddCampus} />
        <Route path="/addstudent" component={AddStudent} />
        <Route path="/campus/:id" component={SingleCampus} />
        <Route path="/student/:id" component={SingleStudent} />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  app
);

export default Main;
