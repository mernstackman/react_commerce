import React from "react";
import CRStyle from "atoms/CRStyle";
import circle from "frontend/icons/circle.svg";
import { sizePaddingRadio, sizeBorderRadiusRadio, sizeBackgroundRadio } from "views/.tokens";

// The displayed Radio style created from div element
const RadioStyle = () => (
  <CRStyle
    padding={sizePaddingRadio}
    radius={sizeBorderRadiusRadio}
    selectedIcon={circle}
    bgSize={sizeBackgroundRadio}
  />
);

export default RadioStyle;
