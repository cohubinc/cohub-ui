var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Component } from "react";
import Color from "src/definitions/enums/Color";
import styles from "./Segment.module.scss";
var Segment = /** @class */ (function (_super) {
    __extends(Segment, _super);
    function Segment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasFocus: false };
        return _this;
    }
    Segment.prototype.render = function () {
        var _a = this.props, style = _a.style, children = _a.children, selected = _a.selected, _b = _a.color, color = _b === void 0 ? Color.darkBlack : _b, small = _a.small, restOfProps = __rest(_a, ["style", "children", "selected", "color", "small"]);
        var hasFocus = this.state.hasFocus;
        var backgroundColor = Color.trueWhite;
        if (hasFocus && !selected) {
            backgroundColor = Color.grey300;
        }
        else if (selected) {
            backgroundColor = color;
        }
        var smallStyle = small ? { height: 24, padding: "3px 11px" } : {};
        return (React.createElement("button", __assign({}, restOfProps, { className: styles.SplitButtonSegment, style: __assign({ backgroundColor: backgroundColor, color: selected ? Color.trueWhite : color, filter: hasFocus && selected ? "brightness(90%)" : "none", border: "1px solid " + color, transition: "all 65ms ease-in-out", cursor: "pointer", minWidth: 75, padding: "1em", fontFamily: "Akkurat-Mono", fontWeight: "lighter", outline: "none", overflow: "hidden" }, smallStyle, style) }), children));
    };
    return Segment;
}(Component));
export default Segment;
//# sourceMappingURL=index.js.map