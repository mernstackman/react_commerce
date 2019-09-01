import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Label's text --> move this into standalone component
const Label = styled.span`
  display: inline-block;
  ${props => {
    return css`
      margin-left: ${props.labelGap || 0}px;
    `;
  }}
`;

Label.propTypes = {
  labelGap: PropTypes.number
};

const mapStateToProps = state => ({
  labelGap: state.labelGap.labelGap
});

// export default Label;
export default connect(mapStateToProps)(Label);
