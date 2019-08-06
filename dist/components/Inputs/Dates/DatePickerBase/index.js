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
import React, { useState } from "react";
import LowLevelDatePicker from "../LowLevelDatePicker";
import FloatingLabelWrapper from "../../FloatingLabelWrapper";
export default function DatePickerBase(_a) {
    var onChange = _a.onChange, value = _a.value, error = _a.error, minDate = _a.minDate, restProps = __rest(_a, ["onChange", "value", "error", "minDate"]);
    var _b = useState(false), inputHasValue = _b[0], setInputHasValue = _b[1];
    var _c = useState(false), rangeError = _c[0], setRangeError = _c[1];
    return (React.createElement(FloatingLabelWrapper, __assign({ floatLabel: inputHasValue, error: rangeError || error }, restProps, { value: value }), function (_a) {
        var _b = _a.componentProps, _ = _b.onChange, _val = _b.value, cmptProps = __rest(_b, ["onChange", "value"]), setInputRef = _a.setInputRef;
        return (React.createElement(LowLevelDatePicker, __assign({}, cmptProps, { value: value, onChange: onChange, rangeError: rangeError, setRangeError: setRangeError, minDate: minDate }, { setNativeElRef: setInputRef, setHasValue: setInputHasValue })));
    }));
}
//# sourceMappingURL=index.js.map