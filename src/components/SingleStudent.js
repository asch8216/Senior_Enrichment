import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchStudents, removeAStudent } from "../../store.js";
import { Provider, connect } from "react-redux";

class Students extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get("/api/students").then(res => {
    //   this.setState({ students: res.data });
    // });
    this.props.fetchStudents();
  }

  render() {
    return (
      <div>
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
    fetchStudents: () => dispatch(fetchStudents()),
    removeAStudent: id => dispatch(removeAStudent(id))
  };
};

const connectedStudents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
export default connectedStudents;
