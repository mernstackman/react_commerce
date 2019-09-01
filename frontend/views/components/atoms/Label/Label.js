import { connect } from "react-redux";
import LabelBase from "./LabelBase";

const mapStateToProps = state => ({
  labelGap: state.labelGap
});

// export default Label;
const Label = connect(mapStateToProps)(LabelBase);
export default Label;
