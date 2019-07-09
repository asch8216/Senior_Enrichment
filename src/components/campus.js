import React from "react";
import axios from "axios";
import { fetchCampus } from "../../store.js";

import { Provider, connect } from "react-redux";

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
                  {campus.name}
                  <div>
                    <div>Address: {campus.address}</div>
                  </div>
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
