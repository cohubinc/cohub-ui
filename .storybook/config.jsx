import React from "react";
// Load came in here because we modified the index.d.ts file to add a load type definition
// This is not part of the actual library
import { addDecorator } from "@storybook/react";
import { addParameters, configure } from "@storybook/react";
import { DocsPage } from "@storybook/addon-docs/blocks";
import CohubTheme from "./cohub_theme";

import { CssFramework } from "dist/index.esm.js";

import "./custom-styles.scss";

const padding = "1rem";
const Decorator = storyFn => (
  <div style={{ paddingTop: padding, paddingLeft: padding }}>
    <CssFramework />
    {storyFn()}
  </div>
);

addDecorator(Decorator);
addParameters({
  options: {
    theme: CohubTheme
  }
});
// addParameters({
//   docs: DocsPage
// });

configure(
  require.context("../src", true, /\.stories\.(js|ts|tsx|mdx)$/),
  module
);
