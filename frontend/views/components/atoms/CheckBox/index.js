import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { hideVisually } from "polished";
import PropTypes from "prop-types";
import checkmark from "frontend/icons/check-box.svg";
import {
  colorBackgroundCheckboxOn,
  colorBackgroundCheckboxOff,
  sizePaddingCheckbox,
  sizeBorderRadiusCheckbox
} from "frontend/views/.tokens";

// The actual input type checkbox
const HiddenCheckBox = styled.input.attrs(props => ({
  type: "checkbox",
  value: props.value || "none"
}))`
  ${hideVisually}
  display: none;
`;

// The displayed checkbox style created from div element
const CheckBoxStyle = styled.div`
  position: relative;
  display: inline-block;
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
    background-color: ${colorBackgroundCheckboxOn};
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => parseInt(props.width || 16) - 2}px;
  }
`;

const CheckBox = props => {
  return (
    <label>
      <HiddenCheckBox {...props} />
      <CheckBoxStyle {...props} />
      {props.label && <span>{props.label}</span>}
    </label>
  );
};

CheckBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.string,
  radius: PropTypes.string,
  bg: PropTypes.string,
  value: PropTypes.oneOfType(String, Number),
  label: PropTypes.oneOfType(String, Number)
};
/* CheckBox.defaultProps = {
  width: "16",
  height: "16"
}; */

export default CheckBox;
