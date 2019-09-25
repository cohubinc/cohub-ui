import React from "react";
import CohubTheme from "./cohub_theme";
import { configure, addDecorator, addParameters } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { CssFramework } from "dist/index.esm.js";

const padding = "1rem";
const Decorator = storyFn => (
  <div style={{ paddingTop: padding, paddingLeft: padding }}>
    <CssFramework />
    {storyFn()}
  </div>
);
addDecorator(Decorator);
addDecorator(withA11y);
addParameters({
  options: {
    theme: CohubTheme
  }
});

configure(
  require.context("../src", true, /\.stories\.(js|ts|tsx|mdx)$/),
  module
);
