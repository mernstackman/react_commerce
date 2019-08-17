const gCompFromObj = require("./generator");
const compsData = require("./_compsData");

const content = `import React from "react";
import Icon from "./_base";
import __key_ from "__value_";
 
const __name_ = props => {
  return <Icon icon={__key_} {...props} />;
};

export default __name_`;

gCompFromObj(compsData, __dirname, content, /Icon/);
