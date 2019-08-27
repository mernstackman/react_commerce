import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Label's text --> move this into standalone component
const Label = styled.span`
  display: inline-block;
  ${props => {
    return css`
      margin-left: ${props.gapWidth || 0}px;
    `;
  }}
`;

Label.propTypes = {
  gapWidth: PropTypes.number
};

export default Label;
