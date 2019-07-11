import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchCampus, removeACampus } from "../../store.js";

import { connect } from "react-redux";

class Campus extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   campuses: []
    // };
  }

  componentDidMount() {
    this.props.fetchCampus();
  }
  render() {
    console.log("campusprops***", this.props);
    return (
      <div>
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
    removeACampus: id => dispatch(removeACampus(id)),
    fetchCampus: () => dispatch(fetchCampus())
  };
};

//connect allows to connect to store
//pass in null if there is no mapstatetoprops
//what curcumstances would you not have mapstatetoprops?
const connectedCampus = connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
export default connectedCampus;
