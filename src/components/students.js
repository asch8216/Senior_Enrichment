import React from "react";
import axios from "axios";

class Students extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get("/api/students").then(res => {
      this.setState({ students: res.data });
    });
  }

  render() {
    console.log(this.state.students);
    return (
      <div>
        {/* <link rel="stylesheet" href="./style.css" media="screen" /> */}
        <ul>
          <div>
            {this.state.students.map(student => {
              return (
                <li key={student.id}>
                  {student.firstName} {student.lastName}
                  <div>
                    <a href="mailto:">{student.email}</a>
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

export default Students;
