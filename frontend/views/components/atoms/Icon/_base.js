import styled from "styled-components";
import { SizeIcon24, SearchIcon } from "frontend/views/.tokens";

const Icon = styled.span`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: inline-block;
  background: url("${({ icon }) => [icon]}") no-repeat center;
`;

Icon.defaultProps = {
  size: SizeIcon24,
  icon: SearchIcon
};

export default Icon;

// Example usage
// import React from "react";
// import Icon from "./base"
// import BurgerRedIcon from "./.token"
/* 
const BurgerRed = props => {
  return <Icon icon={BurgerRedIcon} {...props} />;
};

export default BurgerRed
*/

// Auto generate icon components set (like the example above) using nodejs script
