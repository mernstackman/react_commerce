import React from "react";
import styled from "styled-components";
import { hideVisually } from "polished";
import PropTypes from "prop-types";
import Label from "atoms/Label";
import Container from "atoms/Container";
import CheckBoxStyle from "./CheckBoxStyle";

// The actual input type checkbox
const HiddenCheckBox = styled.input.attrs(props => ({
  type: "checkbox",
  value: props.value || "",
  id: props.id || "",
  name: props.name,
  onChange: props.onChange,
  checked: props.checked
}))`
  /* ${hideVisually} */
  display: none;
`;

// Craft the styled checkbox component
const CheckBox = props => {
  const {
    value,
    id,
    name,
    checked,
    onChange,
    width,
    height,
    padding,
    radius,
    bg,
    label,
    display,
    margin,
    containerStyle,
    bgOn,
    labelGap,
    lineHeight,
    ...others
  } = props;
  // console.log(others);

  return (
    <Container
      as="label"
      display={display || "inline-flex"}
      margin={margin}
      containerStyle={containerStyle}
    >
      <HiddenCheckBox onChange={onChange} checked={checked} value={value} id={id} name={name} />
      <CheckBoxStyle
        width={width}
        height={height}
        padding={padding}
        bg={bg}
        radius={radius}
        bgOn={bgOn}
      />
      {label && (
        <Label labelGap={labelGap} lineHeight={lineHeight}>
          {label}
        </Label>
      )}
    </Container>
  );
};

/* Check the type of props passed to this component */
CheckBox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  display: PropTypes.string,
  margin: PropTypes.string,
  containerStyle: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.string,
  radius: PropTypes.string,
  bg: PropTypes.string,
  bgOn: PropTypes.string,
  labelGap: PropTypes.number,
  lineHeight: PropTypes.string
};

export default CheckBox;
