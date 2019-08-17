import React from "react";
import Icon from "./_base";
import PersonIcon from "frontend/icons/person.svg";
 
const Person = props => {
  return <Icon icon={PersonIcon} {...props} />;
};

export default Person