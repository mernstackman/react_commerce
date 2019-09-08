import React, { Component } from "react";
import BackRed from "./atoms/Icon/BackRed";
import StarGold from "./atoms/Icon/StarGold";
import CheckBox from "atoms/CheckBox";
import { connect } from "react-redux";
// import { setLabelGap } from "frontend/actions";
import Container from "atoms/Container";

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
    checkedBox: new Map() // Save checked status in Map.
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
        {/*         <CheckBox
          key="1"
          onChange={this.handleChange}
          checked={this.state.checked}
          label="Checkbox"
          bgOn="red"
          value="test_value"
          radius="50%"
        />

        <CheckBox
          key="2"
          onChange={this.handleChange}
          checked={this.state.checked}
          label="Name"
          margin="0 0 0 5px"
        /> */}

        {checkboxes.map((item, index) => (
          <CheckBox
            key={index}
            onChange={this.handleChange}
            checked={this.state.checkedBox.get(item.name) || item.checked}
            value={item.value}
            label={item.label}
            name={item.name}
            {...item.bgOn && { bgOn: item.bgOn }}
            {...item.radius && { radius: item.radius }}
            {...item.margin && { margin: item.margin }}
          />
        ))}
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
