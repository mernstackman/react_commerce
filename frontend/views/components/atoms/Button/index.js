import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

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
  box-shadow: none;
  border: none;
  cursor: pointer;
  border-radius: ${props => (props.radius ? props.radius : sizeBorderRadiusButton)};
  padding: ${props => {
    if (props.big) return buttonBigPadding;
    if (props.small) return buttonSmallPadding;
    return buttonMediumPadding;
  }};

  font-size: ${props => {
    if (props.big) return sizeFontBtnBig;
    if (props.small) return sizeFontBtnSmall;
    return sizeFontBtnNormal;
  }};
  font-family: inherit;

  ${props => {
    if (props.secondary) {
      return css`
        background: ${colorBackgroundButtonSecondary};
        color: ${colorFontBtnSecondary};

        /* The order is important*/
        :hover {
          background: ${darken(0.1, colorBackgroundButtonSecondary)};
        }
        :active {
          background: ${darken(0.2, colorBackgroundButtonSecondary)};
        }
      `;
    }

    return css`
      background: ${colorBackgroundButtonPrimary};
      color: ${colorFontBtnPrimary};
      :hover {
        background: ${darken(0.2, colorBackgroundButtonPrimary)};
      }
      :active {
        background: ${lighten(0.1, colorBackgroundButtonPrimary)};
      }
    `;
  }}
`;

export default Button;
