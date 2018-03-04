import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  /*
     - super() Calls constructor from React.component, now we have access to setting state
    -State is something that can change and affectour app
      -usually in parent component, in this case, app
     */
  //functino onSearchChange()
  //anytime input changes, trigger this function
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  componentDidMount() {
    //AJAX https://jsonplaceholder.typicode.com/users
    //AJAX METHOD HERE
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        response.json();
      })
      .then(users => {
        console.log("Setting robot state...");
        this.setState({ robots: robots });
      })
      .catch(err => {
        console.log("Error");
      });
  }
  //Change state.SearchField everytime user types in search box
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  //
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading robots</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      ); //end return expression
    } //end else
  } //end render() function
}

export default App;
