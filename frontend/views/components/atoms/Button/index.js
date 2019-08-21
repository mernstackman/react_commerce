import React from "react";
import styled, { css } from "styled-components";
import {
  sizeBorderRadiusButton,
  colorBackgroundButtonPrimary,
  colorBackgroundButtonSecondary,
  colorFontBtnPrimary,
  colorFontBtnSecondary,
  buttonBigPadding,
  buttonMediumPadding,
  buttonSmallPadding,
  sizeFontBtnBig,
  sizeFontBtnSmall,
  sizeFontBtnNormal
} from "frontend/views/.tokens";

const Button = styled.button`
  border-radius: ${props => (props.radius ? props.radius : sizeBorderRadiusButton)};
  padding: ${props => {
    if (props.big) return buttonBigPadding;
    if (props.small) return buttonSmallPadding;
    return buttonMediumPadding;
  }};
  background: ${props =>
    props.secondary ? colorBackgroundButtonSecondary : colorBackgroundButtonPrimary};
  color: ${props => (props.secondary ? colorFontBtnSecondary : colorFontBtnPrimary)};
  font-size: ${props => {
    if (props.big) return sizeFontBtnBig;
    if (props.small) return sizeFontBtnSmall;
    return sizeFontBtnNormal;
  }};
  font-family: inherit;
  box-shadow: none;
  border: none;
`;

export default Button;
