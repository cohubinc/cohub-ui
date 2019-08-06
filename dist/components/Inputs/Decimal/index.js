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
import NumberFormat from "react-number-format";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
import styles from "./styles.module.scss";
export default function DecimalInput(_a) {
    var input = _a.input, meta = _a.meta, label = _a.label, dataQa = _a["data-qa"], appearance = _a.appearance, _b = _a.extendedPrecision, extendedPrecision = _b === void 0 ? false : _b, _c = _a.integer, integer = _c === void 0 ? false : _c, spanProps = __rest(_a, ["input", "meta", "label", "data-qa", "appearance", "extendedPrecision", "integer"]);
    var showError = !!(meta && meta.touched && meta.error);
    return (React.createElement("span", __assign({ className: styles.input, "data-qa": dataQa }, spanProps),
        React.createElement(FloatingLabelWrapper, __assign({}, input, { label: label, error: showError, appearance: appearance, children: function (_a) {
                var _b = _a.componentProps, onChange = _b.onChange, value = _b.value, rest = __rest(_b, ["onChange", "value"]), setInputRef = _a.setInputRef;
                return (React.createElement(NumberFormat, __assign({}, rest, { getInputRef: setInputRef, value: value, displayType: "input", decimalScale: integer ? 0 : extendedPrecision ? 5 : 2, onValueChange: function (_a) {
                        var floatValue = _a.floatValue;
                        onChange(floatValue);
                    }, thousandSeparator: true })));
            } }))));
}
//# sourceMappingURL=index.js.map