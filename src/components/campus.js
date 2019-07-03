import React from "react";
import axios from "axios";

class Campus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campus: []
    };
  }
  componentDidMount() {
    axios.get("/api/campus").then(res => {
      this.setState({ campus: res.data });
    });
  }
  render() {
    console.log(this.state.campus);
    return (
      <div>
        {/* <link rel="stylesheet" href="./style.css" media="screen" /> */}
        <ul>
          <div>
            {this.state.campus.map(campus => {
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

export default Campus;
