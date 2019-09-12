import React from "react";
import CRStyle from "atoms/CRStyle";
import checkmark from "frontend/icons/check-box.svg";
import { sizePaddingCheckbox, sizeBorderRadiusCheckbox } from "views/.tokens";

// The displayed checkbox style created from div element
const CheckBoxStyle = () => (
  <CRStyle
    padding={sizePaddingCheckbox}
    radius={sizeBorderRadiusCheckbox}
    selectedIcon={checkmark}
  />
);

export default CheckBoxStyle;
