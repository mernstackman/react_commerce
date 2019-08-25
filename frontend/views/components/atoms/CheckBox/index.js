import React, { Fragment } from "react";
import styled from "styled-components";
import { hideVisually } from "polished";
import checkmark from "frontend/icons/check-box.svg";

const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  ${hideVisually}
/*   &:checked + ${CheckBoxStyle} {} */
`;

const CheckBoxStyle = styled.label`
  ::before {
    content: url(${checkmark});
    width: ${props => props.width};
    height: ${props => props.height};
  }
  ${HiddenCheckBox}:checked & ::before {
    content: ${checkmark};
  }
`;

const CheckBox = props => {
  const { label, ...prop } = props;
  console.log(checkmark);
  return (
    <Fragment>
      <HiddenCheckBox />
      <CheckBoxStyle {...prop}>{props.label}</CheckBoxStyle>
    </Fragment>
  );
};

CheckBox.defaultProps = {
  width: "24px",
  height: "24px"
};

export default CheckBox;

/* CheckBoxStyle.defaultProps ={
  width:
} */
