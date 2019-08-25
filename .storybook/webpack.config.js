const path = require("path");
// your app's webpack.config.js
const custom = require("../webpack.config.dev.js");

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = async ({ config, mode }) => {
  // config.output.publicPath = { ...custom.output.publicPath };
  // config.module.rules.push(...custom.module.rules);
  config.resolve.alias = {
    frontend: path.resolve(__dirname, "./../frontend"),
    components: path.resolve(__dirname, "./../frontend/views/components")
  };
  config.resolve.extensions.push(...custom.resolve.extensions);
  // config.plugins.push();
  config.module.rules = config.module.rules.map(rule => {
    if (!rule.test.test(".svg")) {
      return rule;
    }

    const newRule = rule;
    // Changes existing default rule to not handle SVG files
    newRule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/;
    return newRule;
  });

  // Adds new SVG loader
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"]
  });

  return config;
};
