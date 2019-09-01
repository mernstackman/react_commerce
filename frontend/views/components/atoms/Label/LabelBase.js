import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Label's text --> move this into standalone component
const LabelBase = styled.span`
  display: inline-block;
  ${props => {
    return css`
      margin-left: ${props.labelGap || 0}px;
    `;
  }}
`;

LabelBase.propTypes = {
  labelGap: PropTypes.number
};

export default LabelBase;
