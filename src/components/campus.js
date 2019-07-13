import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchCampus, removeACampus } from "../../store.js";

import { connect } from "react-redux";

class Campus extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampus();
  }
  render() {
    return (
      <div className="container">
        {this.props.campuses.map(campus => {
          return (
            <div key={campus.id} className="card">
              <li>
                <a className="img">
                  <img src={campus.imageURL} />
                </a>

                <div className="link">
                  {<Link to={`/campus/${campus.id}`}>{campus.name}</Link>}
                </div>

                <button
                  className="delete-button"
                  type="button"
                  onClick={() => this.props.removeACampus(campus.id)}
                >
                  X Delete
                </button>
              </li>
            </div>
          );
        })}
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
