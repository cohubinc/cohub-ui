import React from "react";
import kebabCase from "lodash/kebabCase";

import Color from "src/definitions/enums/Color";
import BoxShadow from "src/definitions/enums/BoxShadow";
import Font from "src/definitions/enums/Font";

import "./styles/main.scss";

enum Miscellaneous {
  defaultBorderRadius = "4px",
  disabledOpacity = "0.45",
  gutter = "16px"
}

const variablesString = `
  :root {
    ${generateCssVariables(BoxShadow)}
    ${generateCssVariables(Color)}
    ${generateCssVariables(Font)}
    ${generateCssVariables(Miscellaneous)}
  }
`;

const CssVariables = () => <style>{variablesString}</style>;

type CSSENumType =
  | typeof Color
  | typeof Font
  | typeof Miscellaneous
  | typeof BoxShadow;

function generateCssVariables(VariablesEnum: CSSENumType) {
  const names = Object.keys(VariablesEnum).filter(name => name.indexOf("hsl("));

  const cssVariables = names.reduce((accumulatedStyles, name) => {
    const variableName = kebabCase(name);
    const value: string = (VariablesEnum as any)[name];

    return `${accumulatedStyles}
      --${variableName}: ${value};
    `;
  }, "");

  return cssVariables;
}
// generateCssVariables will return a string that looks something like whats below
/*
  --cohub-green: #63B05A;

  --black:  #222020;

  --dark-black: #000;
*/

export default CssVariables;
