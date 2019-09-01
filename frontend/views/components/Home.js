import React, { Component } from "react";
import BackRed from "./atoms/Icon/BackRed";
import StarGold from "./atoms/Icon/StarGold";
import CheckBox from "atoms/CheckBox";
import { connect } from "react-redux";
import { setLabelGap } from "frontend/actions";

class Home extends Component {
  state = {
    checked: false
  };

  componentDidMount() {
    document.title = this.props.title;
    // this.props.dispatch(setLabelGap(this.props.labelGap));
    this.props.setLabelGap(this.props.labelGap);
  }

  handleChange = () => {
    // this.setState({ checked: !this.state.checked });
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
          labelGap={this.props.labelGap}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    labelGap: 3
  };
};

export default connect(
  mapStateToProps,
  { setLabelGap }
)(Home);
