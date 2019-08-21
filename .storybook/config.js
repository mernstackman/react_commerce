import { configure, addParameters } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../frontend/views/components", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  backgrounds: [
    {
      name: "lightGrey",
      value: "#f7f7f7",
      default: true
    }
  ]
});

configure(loadStories, module);
