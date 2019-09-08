import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Label's text --> move this into standalone component
const Label = styled.span`
  display: inline-block;
  cursor: pointer;
  ${props => {
    return css`
      margin-left: ${props.labelGap || 5}px;
      line-height: ${props.lineHeight || "20px"};
    `;
  }}
`;

Label.propTypes = {
  labelGap: PropTypes.number,
  lineHeight: PropTypes.string
};

export default Label;
