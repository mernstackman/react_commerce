import React from "react";
import styled from "styled-components";
import { LabelBold } from "atoms/LabelText";
import Container from "atoms/Container";
import CheckBoxStyle from "./CheckBoxStyle";
import Input from "atoms/Input";

// The actual input type checkbox
const HiddenCheckBox = styled(Input)`
  display: none;
`;

// Craft the styled checkbox component
const CheckBox = props => {
  const {
    value,
    id,
    name,
    checked,
    disabled,
    onChange,
    label,
    display,
    tabindex,
    ref,
    readonly,
    containerStyle
  } = props;

  return (
    <Container as="label" display={display || "inline-flex"} containerStyle={containerStyle}>
      <HiddenCheckBox
        type="checkbox"
        onChange={onChange}
        defaultChecked={checked}
        value={value}
        id={id}
        name={name}
        disabled={disabled}
        tabindex={tabindex}
        ref={ref}
        readonly={readonly}
      />
      <CheckBoxStyle />
      {label && <LabelBold>{label}</LabelBold>}
    </Container>
  );
};

export default CheckBox;
