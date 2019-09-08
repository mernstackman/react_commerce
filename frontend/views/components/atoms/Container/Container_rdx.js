import { connect } from "react-redux";
import ContainerBase from "./Container";

const mapStateToProps = (state, ownProps) => ({
  display: ownProps.display
});

const Container = connect(mapStateToProps)(ContainerBase);
export default Container;
