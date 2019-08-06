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
import "./TextArea.scss";
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = React.createRef();
        return _this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, _b = _a.style, style = _b === void 0 ? {} : _b, className = _a.className, restOfProps = __rest(_a, ["style", "className"]);
        return (React.createElement("textarea", __assign({ ref: this.inputRef }, restOfProps, { className: "GenericTextArea border bd-radius " + className, style: __assign({}, styles.input, TextArea.defaultProps.style, style) })));
    };
    TextArea.defaultProps = {
        className: "",
        style: {
            width: "100%",
            cursor: "text"
        }
    };
    return TextArea;
}(Component));
export default TextArea;
var styles = {
    input: {
        padding: "10px 12px",
        outline: "none"
    }
};
//# sourceMappingURL=index.js.map