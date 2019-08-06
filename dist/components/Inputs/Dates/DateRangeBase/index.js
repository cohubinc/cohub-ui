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
import React, { useState, useRef } from "react";
import LowLevelDatePicker from "../LowLevelDatePicker";
import FloatingLabelWrapper from "../../FloatingLabelWrapper";
import Typography from "src/components/Typography";
import { paddingHorizontal } from "src/helpers/style-utils";
export default function DateRangeBase(_a) {
    var value = _a.value, onChange = _a.onChange, appearance = _a.appearance, error = _a.error, restProps = __rest(_a, ["value", "onChange", "appearance", "error"]);
    var _b = useState(false), startDateHasValue = _b[0], setStartDateHasValue = _b[1];
    var _c = useState(false), endDateHasValue = _c[0], setEndDateHasValue = _c[1];
    var _d = useState(false), startDateRangeError = _d[0], setStartDateRangeError = _d[1];
    var _e = useState(false), endDateRangeError = _e[0], setEndDateRangeError = _e[1];
    var endDateInputRef = useRef(null);
    var startDate = (value && value[0]) || "";
    var endDate = (value && value[1]) || "";
    return (React.createElement(FloatingLabelWrapper, __assign({ floatLabel: startDateHasValue || endDateHasValue, error: error || startDateRangeError || endDateRangeError, appearance: appearance, value: value }, restProps), function (_a) {
        var _b = _a.componentProps, _ = _b.onChange, _val = _b.value, cmptProps = __rest(_b, ["onChange", "value"]), setInputRef = _a.setInputRef;
        return (React.createElement("div", { className: "flex" },
            React.createElement(LowLevelDatePicker, __assign({}, cmptProps, { value: startDate, onChange: function (startD) {
                    onChange([startDate, endDate], "startDate");
                    endDateInputRef.current && endDateInputRef.current.focus();
                }, rangeError: startDateRangeError, setRangeError: setStartDateRangeError, setNativeElRef: setInputRef, setHasValue: setStartDateHasValue, style: { width: 96 }, inputStyle: __assign({}, paddingHorizontal(0), { textAlign: "right" }), "data-testid": "startDateInput" })),
            startDate && (React.createElement(Typography, { className: "flex items-center mx-025", style: {
                    fontWeight: 600,
                    paddingTop: appearance === "contrast" ? 7 : undefined
                } }, "to")),
            React.createElement(LowLevelDatePicker, __assign({}, cmptProps, { value: endDate, minDate: startDate, onChange: function (endD) {
                    onChange([startDate, endD], "endDate");
                }, rangeError: endDateRangeError, setRangeError: setEndDateRangeError, setHasValue: setEndDateHasValue, style: { width: "65%" }, inputStyle: paddingHorizontal(0), setNativeElRef: function (el) { return (endDateInputRef.current = el); }, "data-testid": "endDateInput" }))));
    }));
}
//# sourceMappingURL=index.js.map