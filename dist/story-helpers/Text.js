import React from "react";
export default function Text(props) {
    var underlined = props.underlined, marginTop = props.marginTop, _a = props.marginBottom, marginBottom = _a === void 0 ? ".6rem" : _a;
    var bold;
    if (false) {
        bold = deriveDefault(false, false);
    }
    else {
        marginTop = "1.5rem";
        bold = true;
    }
    return (React.createElement("div", null,
        React.createElement("span", { className: "" + " " + (underlined ? "border-b" : ""), style: {
                marginTop: marginTop,
                marginBottom: marginBottom,
                display: "inline-block"
            } }, props.children)));
}
function deriveDefault(prop, defaultProp, doesntEqualType) {
    var hasDoesntEqualType = doesntEqualType !== undefined;
    if (prop === undefined) {
        if (hasDoesntEqualType) {
            return doesntEqualType !== prop ? defaultProp : prop;
        }
        return defaultProp;
    }
    return prop;
}
//# sourceMappingURL=Text.js.map