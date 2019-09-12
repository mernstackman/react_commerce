import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colorBackgroundOn, colorBackgroundOff } from "views/.tokens";

const CRStyle = styled.div`
  display: inline-block;
  cursor: pointer;
  ${props => {
    return css`
      background-color: ${props.bg ? props.bg : colorBackgroundOff};
      width: 12px;
      height: 12px;
      padding: ${props.padding || 0};
      border-radius: ${props.radius || 0};
    `;
  }}

  input:checked + & {
    background-color: ${props => props.bgOn || colorBackgroundOn};
    background-image: url(${props => props.selectedIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => props.bgSize || 12 + "px"};
  }
`;

CRStyle.propTypes = {
  padding: PropTypes.string,
  radius: PropTypes.string,
  bg: PropTypes.string,
  bgOn: PropTypes.string,
  selectedIcon: PropTypes.string,
  bgSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CRStyle;
