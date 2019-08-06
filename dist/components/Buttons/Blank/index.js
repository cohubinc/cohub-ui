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
import pick from "lodash/pick";
import Typography from "src/components/Typography";
import styles from "./Blank.module.scss";
var Blank = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, children = _a.children, style = _a.style, nativeElRef = _a.nativeElRef, rest = __rest(_a, ["className", "children", "style", "nativeElRef"]);
    return (React.createElement("button", __assign({ style: style, className: styles.ButtonBlank + " " + className, ref: nativeElRef }, rest),
        React.createElement(Typography, { style: pick(style, "color", "fontSize") }, children)));
};
export default Blank;
//# sourceMappingURL=index.js.map