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
import NumberFormat from "react-number-format";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
import "./Money.scss";
var MoneyInput = /** @class */ (function (_super) {
    __extends(MoneyInput, _super);
    function MoneyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoneyInput.prototype.render = function () {
        var _a = this.props, extendedPrecision = _a.extendedPrecision, input = _a.input, _b = _a.meta, meta = _b === void 0 ? {} : _b, label = _a.label, dataQa = _a["data-qa"], appearance = _a.appearance, spanProps = __rest(_a, ["extendedPrecision", "input", "meta", "label", "data-qa", "appearance"]);
        var showError = !!(meta.touched && meta.error);
        return (React.createElement("span", __assign({ className: "CohubMoneyInput", "data-qa": dataQa }, spanProps),
            React.createElement(FloatingLabelWrapper, __assign({}, input, { label: label, error: showError, appearance: appearance, children: function (_a) {
                    var _b = _a.componentProps, onChange = _b.onChange, value = _b.value, rest = __rest(_b, ["onChange", "value"]), setInputRef = _a.setInputRef;
                    return (React.createElement(NumberFormat, __assign({}, rest, { getInputRef: setInputRef, value: value, displayType: "input", prefix: "$", decimalScale: extendedPrecision ? 5 : 2, onValueChange: function (_a) {
                            var floatValue = _a.floatValue;
                            onChange(floatValue);
                        }, thousandSeparator: true })));
                } }))));
    };
    MoneyInput.defaultProps = {
        extendedPrecision: false
    };
    return MoneyInput;
}(PureComponent));
export default MoneyInput;
//# sourceMappingURL=index.js.map