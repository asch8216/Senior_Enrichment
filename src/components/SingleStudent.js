import React from "react";
import { fetchAStudent } from "../../store.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function DisplayCampus(props) {
  if (props.campus && props.campus.name) {
    return <p>{`This students is enrolled at ${props.campus.name}`}</p>;
  } else {
    return <p>This student is not enrolled in school</p>;
  }
}

class SingleStudent extends React.Component {
  componentDidMount() {
    // axios.get("/api/students").then(res => {
    //   this.setState({ students: res.data });
    // });
    this.props.fetchAStudent(this.props.match.params.id);
  }

  render() {
    const {
      firstName,
      lastName,
      imageURL,
      email,
      GPA,
      campus
    } = this.props.singleStudent;

    return (
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <a className="img">
          <img src={imageURL} />
        </a>
        <h2>{email}</h2>
        <p>{`${firstName} ${lastName} has a GPA of ${GPA}
        `}</p>

        <DisplayCampus campus={campus} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    singleStudent: state.singleStudent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAStudent: id => dispatch(fetchAStudent(id))
    // removeAStudent: id => dispatch(removeAStudent(id))
  };
};

const connectedSingleStudent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
export default connectedSingleStudent;
