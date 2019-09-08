import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import checkmark from "frontend/icons/check-box.svg";
import {
  colorBackgroundCheckboxOn,
  colorBackgroundCheckboxOff,
  sizePaddingCheckbox,
  sizeBorderRadiusCheckbox
} from "views/.tokens";

// The displayed checkbox style created from div element
const CheckBoxStyle = styled.div`
  display: inline-block;
  cursor: pointer;
  ${props => {
    return css`
      background-color: ${props.bg ? props.bg : colorBackgroundCheckboxOff};
      width: ${props.width || 16}px;
      height: ${props.height || 16}px;
      padding: ${props.padding || sizePaddingCheckbox};
      border-radius: ${props.radius || sizeBorderRadiusCheckbox};
    `;
  }}

  input:checked + & {
    background-color: ${props => props.bgOn || colorBackgroundCheckboxOn};
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => parseInt(props.width || 16) - 2}px;
  }
`;

CheckBoxStyle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.string,
  radius: PropTypes.string,
  bg: PropTypes.string,
  bgOn: PropTypes.string
};

export default CheckBoxStyle;
