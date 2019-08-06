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
import Button from "../Base";
var OutlineButtonBase = function (_a) {
    var style = _a.style, _b = _a.color, color = _b === void 0 ? Color.darkBlack : _b, rest = __rest(_a, ["style", "color"]);
    return (React.createElement(Button, __assign({ raised: false, backgroundColor: Color.trueWhite, style: __assign({ color: color, border: ".75px solid " + color }, style) }, rest)));
};
export var Outline = function (_a) {
    var light = _a.light, color = _a.color, props = __rest(_a, ["light", "color"]);
    if (light) {
        color = Color.grey700;
    }
    return React.createElement(OutlineButtonBase, __assign({ color: color }, props));
};
export default Outline;
//# sourceMappingURL=index.js.map