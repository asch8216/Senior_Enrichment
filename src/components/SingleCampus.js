import React from "react";

import { fetchACampus } from "../../store.js";

import { connect } from "react-redux";
function DisplayStudents(props) {
  console.log("props here", props);
  if (props.students && props.students.length === 0) {
    return (
      // if (props.students) {
      //   console.log("thisis display students", this.props.students);
      <p>There are no students enrolled in this campus</p>
    );
  } else {
    return (
      <div>
        <p>Enrolled Students:</p>
        {props.students &&
          props.students.map(student => {
            return (
              <ol key={student.id}>
                {student.firstName} {student.lastName}
              </ol>
            );
          })}
      </div>
    );
  }
}

class SingleCampus extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log("$$$the constructor in single campus has run");
  // }

  componentDidMount() {
    // console.log("$$$the CDM in single campus has run");
    this.props.fetchACampus(this.props.match.params.id);
  }
  render() {
    // console.log("$$$the render in Single Campus has run");
    const {
      name,
      address,
      imageURL,
      description,
      students
    } = this.props.singleCampus;
    return (
      <div>
        <h1>{name}</h1>
        <a className="img">
          <img src={imageURL} />
        </a>
        <h2>{address}</h2>
        <p>{description}</p>

        <DisplayStudents students={students} />
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
