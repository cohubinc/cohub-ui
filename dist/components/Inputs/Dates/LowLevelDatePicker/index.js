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
import React, { useMemo, useRef, useState, useEffect } from "react";
import moment from "moment";
import NumberFormat from "react-number-format";
import { renderDate } from "src/helpers/render-dates";
import { isInt } from "src/helpers/input-validations";
import calculateMonth from "./lib/calculateMonth";
import { steps, optionTransitionTime, timeItTakesForAllTransitionsToComplete } from "./constants";
import Picker from "./Picker";
import styles from "./LowLevelDatePicker.module.scss";
import useAttentionWithin from "src/hooks/useAttentionWithin";
export default function LowLevelDatePicker(props) {
    var value = props.value, onChange = props.onChange, _a = props.className, className = _a === void 0 ? "" : _a, style = props.style, _b = props.setRangeError, setRangeError = _b === void 0 ? function (arg) { return arg; } : _b, setNativeElRef = props.setNativeElRef, setHasValue = props.setHasValue, inputStyle = props.inputStyle, rangeError = props.rangeError, minDate = props.minDate, onFocus = props.onFocus, _c = props["data-testid"], testId = _c === void 0 ? "LowLevelDatePickerInput" : _c, restProps = __rest(props, ["value", "onChange", "className", "style", "setRangeError", "setNativeElRef", "setHasValue", "inputStyle", "rangeError", "minDate", "onFocus", "data-testid"]);
    var humanizedDate = useMemo(function () { return humanizeDate(value) || ""; }, [value]);
    var _d = minDate
        ? minDate.split("-").map(function (unit) { return ~~unit; })
        : [], _e = _d[0], minYear = _e === void 0 ? 1980 : _e, _f = _d[1], minMonth = _f === void 0 ? 1 : _f, _g = _d[2], minDay = _g === void 0 ? 1 : _g;
    var _h = useState(""), formatedInputValue = _h[0], setFormatedInputValue = _h[1];
    var _j = useState("month"), picker = _j[0], setPicker = _j[1];
    var _k = useState(false), showPicker = _k[0], setShowPicker = _k[1];
    var _l = useState(""), month = _l[0], setMonth = _l[1];
    var _m = useState(""), day = _m[0], setDay = _m[1];
    var _o = useState(""), year = _o[0], setYear = _o[1];
    var _p = useState(false), pickerFocused = _p[0], setPickerFocused = _p[1];
    var dateTime = buildTimeMap({ month: month, day: day, year: year }, humanizedDate);
    var inputRef = useRef(null);
    var thisRef = useRef(null);
    useAttentionWithin(thisRef, function () { return setShowPicker(false); });
    var hasValue = !!value;
    useEffect(function () {
        setHasValue && setHasValue(showPicker || hasValue);
    }, [showPicker, hasValue]);
    // On first render initialize local state with incoming value date
    useEffect(function () {
        var units = humanizedDate ? humanizedDate.split("-") : null;
        if (units) {
            // initialize our local date state
            setMonth(units[0]);
            setDay(units[1]);
            setYear(units[2]);
        }
    }, []);
    var stepForward = function () { return setPicker(function (prevPicker) { return getNextStep(prevPicker); }); };
    function closePicker() {
        setTimeout(function () {
            setPickerFocused(false);
            setShowPicker(false);
            setPicker("month");
        }, optionTransitionTime);
    }
    // Give time for animation to play after new state is set
    function buildSetter(setFunc) {
        return function (payload) {
            var isFinalStep = steps.indexOf(picker) === steps.length - 1;
            setPickerFocused(true);
            setFunc(payload);
            setTimeout(function () {
                stepForward();
                isFinalStep && closePicker();
            }, isFinalStep
                ? timeItTakesForAllTransitionsToComplete
                : optionTransitionTime);
        };
    }
    function transitionToPicker(payload) {
        setTimeout(function () {
            setPicker(payload);
        }, optionTransitionTime * 2);
    }
    function clearLocallyStoredDates() {
        setMonth("");
        setDay("");
        setYear("");
        setFormatedInputValue("");
    }
    var monthDayYear = [month, day, year].filter(function (unit) { return !!unit; }).join("-");
    var derivedInputValue = !!monthDayYear.length
        ? "" + monthDayYear + "MM-DD-YYYY".slice(monthDayYear.length)
        : "";
    var inputValue = pickerFocused
        ? derivedInputValue || humanizedDate
        : formatedInputValue || humanizedDate;
    return (React.createElement("div", { className: className, style: __assign({ position: "relative" }, style), ref: thisRef },
        React.createElement(NumberFormat, __assign({}, restProps, { value: inputValue, className: "LowLevelDatePickerInput " + styles.input, displayType: "input", format: "##-##-####", mask: ["M", "M", "D", "D", "Y", "Y", "Y", "Y"], getInputRef: function (el) {
                inputRef.current = el;
                setNativeElRef && setNativeElRef(el);
            }, onFocus: function (e) {
                onFocus && onFocus(e);
                setShowPicker(true);
                setPickerFocused(false);
                inputRef.current && inputRef.current.select();
                // Init local input state
                setFormatedInputValue(derivedInputValue);
            }, onKeyDown: function (_a) {
                var key = _a.key;
                if (key === "Enter") {
                    if (showPicker) {
                        if ([month, day, year].every(function (unit) { return !!unit; })) {
                            var newDate = dateTimeToISO({ month: month, day: day, year: year });
                            onChange(newDate);
                        }
                        setPickerFocused(false);
                        clearLocallyStoredDates();
                        closePicker();
                    }
                    else {
                        setShowPicker(true);
                    }
                }
            }, onChange: function (_a) {
                var formattedValue = _a.target.value;
                setFormatedInputValue(formattedValue);
                !showPicker && setShowPicker(true);
                if (formattedValue === "") {
                    value && onChange("");
                }
                var _b = parseFormatedValue(formattedValue), _c = _b[0], m = _c === void 0 ? "" : _c, _d = _b[1], d = _d === void 0 ? "" : _d, _e = _b[2], y = _e === void 0 ? "" : _e;
                // month validation logic
                var monthInt = ~~m;
                var checkMonth = function (min) {
                    if (min === void 0) { min = 1; }
                    return monthInt >= min && monthInt < 13;
                };
                // day validation logic
                var yearString = y.length === 4 ? y : new Date().getFullYear().toString();
                var _f = calculateMonth(m, yearString), _ = _f[0], _g = _f[1], daysInMonth = _g === void 0 ? 31 : _g;
                var dayInt = ~~d;
                var checkDay = function (min) {
                    if (min === void 0) { min = 1; }
                    return dayInt >= min && dayInt < daysInMonth + 1;
                };
                // year validation logic
                var yearInt = ~~y;
                var fiveYearsFromNow = new Date().getFullYear() + 5;
                var yearInRange = yearInt >= minYear && yearInt < fiveYearsFromNow;
                var yearIsMinYear = yearInt === minYear;
                if (y) {
                    if (y.length === 4) {
                        var monthInRange = yearIsMinYear
                            ? checkMonth(minMonth)
                            : checkMonth();
                        var dayInRange = yearIsMinYear && monthInt === minMonth
                            ? checkDay(minDay)
                            : checkDay();
                        if (yearInRange && monthInRange && dayInRange) {
                            setRangeError(false);
                            setYear(y);
                            setTimeout(function () {
                                onChange(dateTimeToISO({ month: m, day: d, year: y }));
                                clearLocallyStoredDates();
                                closePicker();
                            }, optionTransitionTime);
                            return;
                        }
                        else {
                            setRangeError(true);
                            return;
                        }
                    }
                    else {
                        setRangeError(false);
                        setShowPicker(true);
                    }
                }
                if (m) {
                    if (m.length === 2) {
                        if (checkMonth()) {
                            setMonth(m);
                            transitionToPicker("day");
                        }
                        else {
                            setRangeError(true);
                            transitionToPicker("month");
                            return;
                        }
                    }
                    else {
                        setMonth("");
                        transitionToPicker("month");
                        return;
                    }
                }
                else {
                    setMonth("");
                    transitionToPicker("month");
                    return;
                }
                if (d) {
                    if (d.length === 2) {
                        if (checkDay()) {
                            setDay(d);
                            setRangeError(false);
                            transitionToPicker("year");
                        }
                        else {
                            setRangeError(true);
                            transitionToPicker("day");
                        }
                    }
                    else {
                        setRangeError(false);
                    }
                }
                else {
                    setDay("");
                    setRangeError(false);
                    transitionToPicker("day");
                }
            }, "data-testid": testId, "aria-invalid": rangeError ? true : false, style: inputStyle })),
        React.createElement(Picker, __assign({ style: { position: "absolute", top: 50 }, open: showPicker, minDate: { minMonth: minMonth, minDay: minDay, minYear: minYear } }, { picker: picker, dateTime: dateTime }, { setMonthAndDay: buildSetter(function (payload) {
                setMonth(payload.month);
                setDay(payload.day);
            }), setMonth: buildSetter(function (payload) { return setMonth(payload); }), setYear: function (payload) {
                setYear(payload);
                setTimeout(function () {
                    var newDate = dateTimeToISO({ month: month, day: day, year: payload });
                    onChange(newDate);
                    setPickerFocused(false);
                    clearLocallyStoredDates();
                }, optionTransitionTime);
                closePicker();
            }, goToSection: setPicker }))));
}
var finalStep = steps.length - 1;
function getNextStep(picker) {
    var currentStep = steps.indexOf(picker);
    var nextStepIndex = currentStep === finalStep ? 0 : currentStep + 1;
    return steps[nextStepIndex];
}
var buildTimeMap = function (_a, 
/** Formated date string: "09-09-1984" */
humanizedDate) {
    var month = _a.month, day = _a.day, year = _a.year;
    if (humanizedDate === void 0) { humanizedDate = ""; }
    var _b = humanizedDate.split("-"), m = _b[0], d = _b[1], y = _b[2];
    return {
        month: month || m,
        day: day || d,
        year: year || y
    };
};
var dateTimeToISO = function (_a) {
    var month = _a.month, day = _a.day, year = _a.year;
    return moment(year + "-" + month + "-" + day, "Y-M-D").format("YYYY-MM-DD");
};
// formattedValue will look something like this -> "1M-DD-YYYY"
var parseFormatedValue = function (formattedValue) {
    return formattedValue.split("-").map(function (unit) {
        // get rid of those pesky letters
        if (isInt(unit)) {
            return unit;
        }
        var parsedUnit = parseInt(unit);
        if (parsedUnit === 0)
            return parsedUnit.toString();
        return (parsedUnit || "").toString();
    });
};
function humanizeDate(value) {
    if (!value)
        return "";
    if (value.length < 10) {
        return value
            .split("-")
            .reverse()
            .join("-");
    }
    return renderDate("input")(value);
}
//# sourceMappingURL=index.js.map