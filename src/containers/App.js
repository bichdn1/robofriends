import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import { robots } from "../robots";

import "tachyons";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    // setSearchField(event.target.value);
  };

  render() {
    const filteredRobot = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (!this.state.robots.length) {
      return <p>Loading...</p>;
    }
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          searchField={this.state.searchField}
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
