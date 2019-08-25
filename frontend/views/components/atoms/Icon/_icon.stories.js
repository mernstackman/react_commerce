import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StarGold from "./StarGold";

storiesOf("Icon", module).add("star gold", () => <StarGold onClick={action("clicked")} />);
