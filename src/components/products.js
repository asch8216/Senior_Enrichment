import React from "react";
import axios from "axios";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      data: [],
      users: []
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount() {
    axios.get("/products").then(res => {
      this.setState({ data: res.data });
    });

    axios.get("/users").then(res => {
      this.setState({ users: res.data });
    });
    // fetch("/products")
    //   .then(response => {
    //     response.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(e => console.error(e));
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="./style.css" media="screen" />
        <ul>
          <div>
            <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">
                Dropdown
              </button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Moe</a>
                <a href="#">Larry</a>
                <a href="#">Curly</a>
              </div>
              {this.state.data.map(item => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </div>
            {/* {this.state.users.map(item => {
              return <li key={item.id}>` -{users.name}`</li>;
            })} */}
          </div>
        </ul>
      </div>
    );
  }
}

export default Products;
