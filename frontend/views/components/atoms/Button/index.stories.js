import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

storiesOf("Button|Primary", module)
  .add("big", () => (
    <Button big onClick={action("clicked")}>
      Big
    </Button>
  ))
  .add("normal", () => <Button onClick={action("clicked")}>Normal</Button>)
  .add("small", () => (
    <Button small onClick={action("clicked")}>
      Small
    </Button>
  ));

storiesOf("Button|Secondary", module)
  .add("big", () => (
    <Button secondary big onClick={action("clicked")}>
      Big
    </Button>
  ))
  .add("normal", () => (
    <Button secondary onClick={action("clicked")}>
      Normal
    </Button>
  ))
  .add("small", () => (
    <Button secondary small onClick={action("clicked")}>
      Small
    </Button>
  ));
