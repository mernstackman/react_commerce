import React, { Component } from "react";
import BackRed from "./atoms/Icon/BackRed";
import StarGold from "./atoms/Icon/StarGold";
import CheckBox from "atoms/CheckBox";
class Home extends Component {
  state = {
    checked: false
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div>
        <h1>I am home!</h1>
        <BackRed size="16" />
        <StarGold />
        <CheckBox
          onChange={this.handleChange}
          defaultChecked={this.state.checked}
          label="Checkbox"
          gapWidth={3}
        />
      </div>
    );
  }
}

export default Home;
