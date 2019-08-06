var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import Color from "src/definitions/enums/Color";
import AnimatedCheckmark from "src/components/AnimatedCheckmark";
import Typography from "src/components/Typography";
import { getInsetColor } from "./getInsetColor";
import Icon from "src/components/Icon";
import "./Base.scss";
export default function Base(props) {
    var style = props.style, _a = props.className, className = _a === void 0 ? "" : _a, children = props.children, success = props.success, _b = props.raised, raised = _b === void 0 ? true : _b, _c = props.backgroundColor, backgroundColor = _c === void 0 ? Color.grey600 : _c, disabled = props.disabled, error = props.error, icon = props.icon, iconPosition = props.iconPosition, iconSize = props.iconSize, restOfProps = __rest(props, ["style", "className", "children", "success", "raised", "backgroundColor", "disabled", "error", "icon", "iconPosition", "iconSize"]);
    backgroundColor = error ? Color.red500 : backgroundColor;
    var insetColor = raised && getInsetColor(backgroundColor);
    var color = (style && style.color) || "#EFF7EE";
    var flexDirection = iconPosition === "right" ? "row-reverse" : "row";
    return (React.createElement("button", __assign({ className: "CohubButton " + className, style: __assign({ backgroundColor: backgroundColor, boxShadow: raised
                ? "0 1px 3px hsla(0, 0%, 0%, 0.1), inset 0px 1px 0px " + insetColor
                : undefined }, style), disabled: disabled }, restOfProps),
        React.createElement("div", { className: "button-text relative flex items-center" },
            success && (React.createElement("div", { className: "flex justify-center items-center absolute w-100", style: { zIndex: 2, bottom: -0.5 } },
                React.createElement(AnimatedCheckmark, { size: "1.25rem" }))),
            React.createElement(Typography.Small, { uppercase: true, color: color, style: {
                    opacity: success ? 0 : 1,
                    transition: "opacity 150ms ease-in"
                } },
                React.createElement("div", { className: "flex items-center", style: { flexDirection: flexDirection } },
                    icon && (React.createElement(Icon, { name: icon, color: color, size: iconSize, style: {
                            marginTop: 1
                        } })),
                    React.createElement("span", { id: "CHILDREN", style: {
                            marginLeft: icon && iconPosition === "left" ? "0.5rem" : "",
                            marginRight: icon && iconPosition === "right" ? "0.5rem" : ""
                        } }, children))))));
}
//# sourceMappingURL=index.js.map