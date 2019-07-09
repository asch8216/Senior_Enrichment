import React from "react";
import axios from "axios";
import { fetchStudents } from "../../store.js";
import { Provider, connect } from "react-redux";

class Students extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   students: []
    // };
  }

  componentDidMount() {
    // axios.get("/api/students").then(res => {
    //   this.setState({ students: res.data });
    // });
    this.props.fetchStudents();
  }

  render() {
    console.log("studentsprops***", this.props);
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
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents())
  };
};

const connectedStudents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
export default connectedStudents;
