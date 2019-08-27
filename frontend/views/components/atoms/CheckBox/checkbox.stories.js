import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CheckBox from "./CheckBox";

class CheckBoxStory extends Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return <CheckBox onChange={this.handleChange} defaultChecked={this.state.checked} />;
  }
}

storiesOf("Checkbox", module).add("single", () => <CheckBoxStory />);
