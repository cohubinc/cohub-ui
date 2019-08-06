import React from "react";
import kebabCase from "lodash/kebabCase";
import Color from "src/definitions/enums/Color";
import BoxShadow from "src/definitions/enums/BoxShadow";
import Font from "src/definitions/enums/Font";
import "./styles/main.scss";
var Miscellaneous;
(function (Miscellaneous) {
    Miscellaneous["defaultBorderRadius"] = "4px";
    Miscellaneous["disabledOpacity"] = "0.45";
    Miscellaneous["gutter"] = "16px";
})(Miscellaneous || (Miscellaneous = {}));
var variablesString = "\n  :root {\n    " + generateCssVariables(BoxShadow) + "\n    " + generateCssVariables(Color) + "\n    " + generateCssVariables(Font) + "\n    " + generateCssVariables(Miscellaneous) + "\n  }\n";
var CssVariables = function () { return React.createElement("style", null, variablesString); };
function generateCssVariables(VariablesEnum) {
    var names = Object.keys(VariablesEnum).filter(function (name) { return name.indexOf("hsl("); });
    var cssVariables = names.reduce(function (accumulatedStyles, name) {
        var variableName = kebabCase(name);
        var value = VariablesEnum[name];
        return accumulatedStyles + "\n      --" + variableName + ": " + value + ";\n    ";
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
//# sourceMappingURL=index.js.map