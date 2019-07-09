import React, { Component } from "react";
import store from "../../store.js";
import { postCampus } from "../../store.js";

//react-redux handles this.unsubscribe now
export default class AddCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: ""
    };
    // this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log(evt.target.name);
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(postCampus(this.state));
    this.setState({ name: "", address: "", description: "" });
  }

  // handleChange(evt) {
  //   store.dispatch(getNewCampus(evt.target.value));
  // }

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <h1>Add A Campus</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="form-row">
            Campus Name
            <input
              name="name"
              type="text"
              placeholder=" Enter College Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>

          <label className="form-row" htmlFor="name">
            Campus Address
            <input
              name="address"
              type="text"
              placeholder=" Enter Campus Address"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </label>
          <label className="form-row" htmlFor="name">
            Campus Description
            <input
              name="description"
              type="text"
              placeholder=" Enter Campus Description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </label>
          <button>Submit form</button>
        </form>
      </div>
    );
  }
}
