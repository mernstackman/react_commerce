import React from "react";
import styled, { css } from "styled-components";
import { hideVisually } from "polished";
import PropTypes from "prop-types";
import checkmark from "frontend/icons/check-box.svg";
import Label from "atoms/Label";
import {
  colorBackgroundCheckboxOn,
  colorBackgroundCheckboxOff,
  sizePaddingCheckbox,
  sizeBorderRadiusCheckbox
} from "frontend/views/.tokens";

// Container --> better to be defined as a standalone component
const Container = styled.label`
  ${props => {
    return css`
      display: ${props.display || "inline-flex"};
      margin: ${props.margin || 0};
    `;
  }}
`;

// The actual input type checkbox
const HiddenCheckBox = styled.input.attrs(props => ({
  type: "checkbox",
  value: props.value || "",
  id: props.id || ""
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

// Craft the styled checkbox component
const CheckBox = props => {
  const { value, id, width, height, padding, radius, bg, label, ...others } = props;
  console.log(others);
  return (
    <Container>
      <HiddenCheckBox {...others} value={value} id={id} />
      <CheckBoxStyle width={width} height={height} padding={padding} bg={bg} radius={radius} />
      {label && <Label>{label}</Label>}
    </Container>
  );
};

CheckBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  // labelGap: PropTypes.number,
  padding: PropTypes.string,
  radius: PropTypes.string,
  bg: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CheckBox;
