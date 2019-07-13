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
      <div className="container">
        {this.props.students.map(student => {
          return (
            <div key={student.id} className="card">
              <li>
                <a className="img">
                  <img src={student.imageURL} />
                </a>
                <div className="link">
                  <Link to={`/student/${student.id}`}>
                    {`${student.firstName} ${student.lastName}`}
                  </Link>
                </div>

                <button
                  type="button"
                  className="delete"
                  className="delete-button"
                  onClick={() => this.props.removeAStudent(student.id)}
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
