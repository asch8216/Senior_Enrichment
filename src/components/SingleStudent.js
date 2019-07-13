import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchAStudent } from "../../store.js";
import { Provider, connect } from "react-redux";

class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get("/api/students").then(res => {
    //   this.setState({ students: res.data });
    // });
    this.props.fetchAStudent(this.props.match.params.id);
  }

  render() {
    console.log("singlestudentprops********", this.props);
    return (
      <div>
        <h1>SingleStudent view</h1>
        <ul>
          <div>
            {this.props.students.map(student => {
              return (
                <li key={student.id}>
                  {student.firstName} {student.lastName}
                  <div>
                    <a href={`mailto:${student.email}`}>{student.email}</a>
                    <div>Student GPA: {student.GPA}</div>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                  </div>
                  <button
                    type="button"
                    onClick={() => this.props.removeAStudent(student.id)}
                    className="delete"
                    className="delete-button"
                  >
                    X Delete{" "}
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
  return {
    students: state.students
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
