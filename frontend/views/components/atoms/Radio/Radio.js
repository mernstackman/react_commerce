import React from "react";
import styled from "styled-components";
import { LabelBold } from "atoms/LabelText";
import Container from "atoms/Container";
import RadioStyle from "./RadioStyle";
import Input from "atoms/Input";

// The actual input type Radio
const HiddenRadio = styled(Input)`
  display: none;
`;

// Craft the styled Radio component
const Radio = props => {
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
      <HiddenRadio
        type="radio"
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
      <RadioStyle />
      {label && <LabelBold>{label}</LabelBold>}
    </Container>
  );
};

export default Radio;
