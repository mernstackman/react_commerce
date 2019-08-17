import React, { Component } from "react";
import BackRed from "./atoms/Icon/BackRed";
import StarGold from "./atoms/Icon/StarGold";

class Home extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <h1>I am home!</h1>
        <BackRed size="16" />
        <StarGold />
      </div>
    );
  }
}

export default Home;
