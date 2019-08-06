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
import React from "react";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, appearance = _a.appearance, label = _a.label, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, onChange = _a.onChange, value = _a.value, error = _a.error, restProps = __rest(_a, ["style", "className", "appearance", "label", "onClick", "onFocus", "onBlur", "onChange", "value", "error"]);
        return (React.createElement(FloatingLabelWrapper, __assign({ "data-qa-label": this.props["data-qa-label"] }, {
            style: style,
            className: className,
            appearance: appearance,
            label: label,
            onClick: onClick,
            onFocus: onFocus,
            onBlur: onBlur,
            onChange: onChange,
            value: value,
            error: error
        }), function (_a) {
            var componentProps = _a.componentProps;
            return React.createElement("input", __assign({}, componentProps, restProps));
        }));
    };
    Base.defaultProps = {
        type: "text",
        autoComplete: "off",
        autoFocus: false,
        "data-qa": "base-input-element",
        "data-qa-label": "base-input-element-label"
    };
    return Base;
}(React.PureComponent));
export default Base;
//# sourceMappingURL=index.js.map