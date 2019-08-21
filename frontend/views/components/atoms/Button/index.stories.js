import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

storiesOf("Button|Primary", module)
  .add("big", () => <Button big>Big</Button>)
  .add("normal", () => <Button>Normal</Button>)
  .add("small", () => <Button small>Small</Button>);

storiesOf("Button|Secondary", module)
  .add("big", () => (
    <Button secondary big>
      Big
    </Button>
  ))
  .add("normal", () => <Button secondary>Normal</Button>)
  .add("small", () => (
    <Button secondary small>
      Small
    </Button>
  ));
