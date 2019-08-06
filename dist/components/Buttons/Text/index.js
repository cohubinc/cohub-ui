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
import React, { PureComponent } from "react";
import Blank from "../Blank";
import Color from "src/definitions/enums/Color";
import Typography from "src/components/Typography";
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        var _a = this.props, color = _a.color, fontSize = _a.fontSize, children = _a.children, textStyle = _a.textStyle, block = _a.block, style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, rest = __rest(_a, ["color", "fontSize", "children", "textStyle", "block", "style", "className"]);
        return (React.createElement(Blank, __assign({}, rest, { className: className + " p-05", style: __assign({ display: block ? "block" : undefined }, style) }),
            React.createElement(Typography, { uppercase: true, color: color, weight: 500, style: __assign({ fontSize: fontSize }, textStyle), kerning: 0.07 }, children)));
    };
    Text.defaultProps = {
        color: Color.iconGrey,
        fontSize: "12px"
    };
    return Text;
}(PureComponent));
export default Text;
//# sourceMappingURL=index.js.map