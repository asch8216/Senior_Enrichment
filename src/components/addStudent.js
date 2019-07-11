import React, { Component } from "react";
import store from "../../store.js";
import { postStudent } from "../../store.js";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      GPA: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    console.log(evt.target.name);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    console.log("********handling submit");
    event.preventDefault();
    store.dispatch(postStudent(this.state));
    this.setState({ firstName: "", lastName: "", email: "", GPA: "" });
  }

  render() {
    return (
      <div className="form">
        <h1>Add A Student</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name">Student First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder=" Enter Student First Name"
            onChange={this.handleChange}
            value={this.state.firstName}
          />

          <label htmlFor="name">Student Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder=" Enter Student Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <label htmlFor="name">Student Email</label>
          <input
            name="email"
            type="text"
            placeholder=" Enter Student Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="name">Student GPA</label>
          <input
            name="GPA"
            type="text"
            placeholder=" Enter Student GPA"
            onChange={this.handleChange}
            value={this.state.GPA}
          />
          <button className="button">Submit form</button>
        </form>
      </div>
    );
  }
}
