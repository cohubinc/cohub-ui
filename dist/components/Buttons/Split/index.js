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
import Segment from "./Segment";
var DefaultSplitButtons = function (props) {
    var labels = props.labels, style = props.style, className = props.className, segmentStyle = props.segmentStyle, onChange = props.onChange, selectedIndex = props.selectedIndex, color = props.color;
    var numBtns = labels.length;
    return (React.createElement("div", __assign({}, { className: className, style: style }, { style: {
            display: "inline-grid",
            gridTemplateColumns: "repeat(" + numBtns + ", 1fr)"
        } }), labels.map(function (label, index) { return (React.createElement(Segment, { key: label, color: color, style: segmentStyle, onClick: function () { return onChange(index); }, selected: selectedIndex === index }, label)); })));
};
var PrimarySplitButtons = function (_a) {
    var color = _a.color, rest = __rest(_a, ["color"]);
    return (React.createElement(DefaultSplitButtons, __assign({ color: color || Color.primary }, rest)));
};
var Split = /** @class */ (function (_super) {
    __extends(Split, _super);
    function Split() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Split.prototype.render = function () {
        return React.createElement(DefaultSplitButtons, __assign({}, this.props));
    };
    Split.Primary = PrimarySplitButtons;
    return Split;
}(Component));
export default Split;
//# sourceMappingURL=index.js.map