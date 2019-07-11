import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchACampus, removeACampus } from "../../store.js";

import { connect } from "react-redux";

class SingleCampus extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   campuses: []
    // };
  }

  componentDidMount() {
    this.props.fetchACampus(this.props.match.params.id);
  }
  render() {
    console.log("singlecampusprops***", this.props);
    return (
      <div>
        <h1>thisis isingle campus view</h1>
        <ul>
          <div>
            {this.props.campuses.map(campus => {
              return (
                <li key={campus.id}>
                  <a>
                    <img src={campus.imageURL} />
                  </a>

                  <div>
                    {<Link to={`/campus/${campus.id}`}>{campus.name}</Link>}
                    <div>Address: {campus.address}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => this.props.removeACampus(campus.id)}
                    className="delete"
                  >
                    X Delete
                  </button>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state", state); // state
  console.log("props", ownProps); // {}
  return {
    campuses: state.campuses
  };
};

//mapdispatch to props
// allows use of dispatch
//questioning use of fetchCampus: () => dispatch(fetchCampus())
const mapDispatchToProps = dispatch => {
  return {
    // removeACampus: id => dispatch(removeACampus(id)),
    fetchACampus: id => dispatch(fetchACampus(id))
  };
};

//connect allows to connect to store
//pass in null if there is no mapstatetoprops
//what curcumstances would you not have mapstatetoprops?
const connectedSingleCampus = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
export default connectedSingleCampus;
