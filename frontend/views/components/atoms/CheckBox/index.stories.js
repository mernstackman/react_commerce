import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CheckBox from "./index";

storiesOf("Checkbox", module).add("big", () => (
  <CheckBox label="Checkbox" onChange={action("changed")}>
    Big
  </CheckBox>
));
