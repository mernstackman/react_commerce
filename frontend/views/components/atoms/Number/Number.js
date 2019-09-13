import styled from "styled-components";
import Circle from "atoms/Circle";
import {
  colorBackgroundCircleRed,
  colorBackgroundCircleWhite,
  colorFontPrimary,
  colorFontSecondary
} from "views/.tokens";

export const Number = styled(Circle)`
  background: ${colorBackgroundCircleRed};
  color: ${colorFontPrimary};
`;

export const NumberWhite = styled(Circle)`
  background: ${colorBackgroundCircleWhite};
  color: ${colorFontSecondary};
`;
