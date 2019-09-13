import React, { Component } from "react";
import BackRed from "./atoms/Icon/BackRed";
import StarGold from "./atoms/Icon/StarGold";
import CheckBox from "atoms/CheckBox";
import Radio from "atoms/Radio";
import { connect } from "react-redux";
// import { setLabelGap } from "frontend/actions";
import Container from "atoms/Container";
import { Number, NumberWhite } from "atoms/Number";

const checkboxes = [
  { name: "box_one", checked: false, value: "first opt", label: "One", bgOn: "red", radius: "50%" },
  {
    name: "box_two",
    checked: false,
    value: "second opt",
    label: "Two",
    bgOn: "orange",
    margin: "0 0 0 5px"
  },
  { name: "box_three", checked: false, value: "third opt", label: "Three", margin: "0 0 0 5px" }
];

class Home extends Component {
  state = {
    checkedBox: new Map(), // Save checked status in Map.
    radioCheck: false
  };

  componentDidMount() {
    document.title = this.props.title;
    // this.props.dispatch(setLabelGap(this.props.labelGap));
    /* Setting component's props is done here */
    // this.props.setLabelGap(this.props.labelGap);
  }

  handleChange = e => {
    // Insert the checked box status to checkedBox Map
    const targetBoxName = e.target.name;
    const targetCheckedStatus = e.target.checked;
    this.setState({ checkedBox: this.state.checkedBox.set(targetBoxName, targetCheckedStatus) });
  };

  radioChange = e => {
    this.setState({ radioCheck: !this.state.radioCheck });
  };

  render() {
    console.log(this.state.checkedBox);
    return (
      <div>
        <h1>I am home!</h1>
        <Container display="inline" vcenter>
          Test
        </Container>
        <BackRed size="16" />

        <StarGold />
        <Radio label="Radio" onChange={this.radioChange} />
        {checkboxes.map((item, index) => (
          <CheckBox
            key={index}
            onChange={this.handleChange}
            checked={this.state.checkedBox.get(item.name) || item.checked}
            value={item.value}
            label={item.label}
            name={item.name}
          />
        ))}
        <Number size={16}>6</Number>
        <NumberWhite>6</NumberWhite>
        <Number>7</Number>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // labelGap: 5
  };
};
export default Home;
/* export default connect(
  mapStateToProps
  // { setLabelGap }
)(Home); */
