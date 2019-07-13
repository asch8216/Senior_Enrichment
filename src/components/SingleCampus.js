import React from "react";
import { Link } from "react-router-dom";

import { fetchACampus } from "../../store.js";

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
    console.log("this.props.match.params***", this.props.match.params);
    return (
      <div>
        {/* // { {({ campus } = this.props.campuses[0])}
      // <h1>thisis single campus</h1> */}
        <h1>{this.props.singleCampus.name}</h1>
        <h2>{this.props.singleCampus.address}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state", state); // state
  console.log("props", ownProps); // {}
  return {
    singleCampus: state.singleCampus
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
