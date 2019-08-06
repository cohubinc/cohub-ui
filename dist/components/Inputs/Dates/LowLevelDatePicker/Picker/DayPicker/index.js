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
import React, { useRef, useEffect } from "react";
import times from "lodash/times";
import padStart from "lodash/padStart";
import Typography from "src/components/Typography";
import Color from "src/definitions/enums/Color";
import { size } from "src/helpers/style-utils";
import Buttons from "src/components/Buttons";
import { transition, switchPickerTransitionTime } from "../../constants";
import calculateMonth from "../../lib/calculateMonth";
import styles from "../shared.module.scss";
var padValue = function (value) {
    return value ? padStart(value.toString(), 2, "0") : "";
};
export default function DayPicker(props) {
    var dateTime = props.dateTime, onChange = props.onChange, picker = props.picker, goToSection = props.goToSection;
    var month = dateTime.month, day = dateTime.day;
    if (!month || month.length < 2) {
        month = padValue(new Date().getMonth().toString());
    }
    var year = dateTime.year && dateTime.year.length === 4
        ? dateTime.year
        : new Date().getFullYear().toString();
    var gridRef = useRef(null);
    var selectedDayRef = useRef(null);
    var firstDayRef = useRef(null);
    useEffect(function () {
        // If tabbing from the input element apply focus to selected day
        function handleKeydown(event) {
            var key = event.key;
            if (picker !== "day" || key !== "Tab")
                return;
            var activeEl = document.activeElement;
            var inputHasFocus = activeEl && activeEl.classList.contains("DatePickerInput");
            if (inputHasFocus) {
                event.preventDefault();
                if (selectedDayRef.current) {
                    selectedDayRef.current.focus();
                    return;
                }
                firstDayRef.current && firstDayRef.current.focus();
            }
        }
        window.addEventListener("keydown", handleKeydown);
        return function () { return window.removeEventListener("keydown", handleKeydown); };
    }, [gridRef.current, selectedDayRef.current, picker]);
    // Focus on selected Day or container when section changes to "day" and input isn't focused
    useEffect(function () {
        var activeElement = document.activeElement;
        if (activeElement && activeElement.tagName === "BODY" && picker === "day") {
            setTimeout(function () {
                if (selectedDayRef.current) {
                    selectedDayRef.current.focus();
                    return;
                }
                gridRef.current && gridRef.current.focus();
            }, switchPickerTransitionTime);
        }
    }, [picker]);
    var _a = getMonthData(month, year), monthStart = _a.monthStart, daysInMonth = _a.daysInMonth, daysInPreviousMonth = _a.daysInPreviousMonth;
    var handleFocus = function () { return picker !== "day" && goToSection("day"); };
    var body = times(daysInMonth)
        .map(function (d) { return d + 1; })
        .map(function (monthDay) { return padValue(monthDay); })
        .map(function (monthDay) {
        var selected = monthDay === day;
        var maybeFistDayRef = monthDay === "01" ? firstDayRef : undefined;
        return (React.createElement(Day, { key: monthDay, selected: selected, nativeElRef: selected ? selectedDayRef : maybeFistDayRef, onClick: function () { return onChange({ month: month, day: padValue(monthDay) }); }, onFocus: handleFocus }, monthDay));
    });
    var previousMonthsDays = times(daysInPreviousMonth + 1);
    // If the month starts on the 5 day of the week take the last 5 days off of the previous month and reverse the array
    var endOfPreviousMonthCells = times(monthStart, function () {
        var previousMonthDay = padValue(previousMonthsDays.pop());
        var monthMinusOne = ~~month - 1;
        var previousMonth = monthMinusOne === 0 ? "12" : padValue(monthMinusOne);
        return (React.createElement(Day, { muted: true, key: previousMonthDay + "-" + (~~month - 1), onClick: function () {
                onChange({ month: previousMonth, day: previousMonthDay });
            }, onFocus: handleFocus }, previousMonthDay));
    }).reverse();
    body.unshift.apply(body, endOfPreviousMonthCells);
    var cellsInFiveWeekMonth = 35;
    var shouldAddExtraRow = body.length > cellsInFiveWeekMonth;
    var daysInWeek = 7;
    var weeksInMonth = shouldAddExtraRow ? 6 : 5;
    var numberOfGridCells = weeksInMonth * daysInWeek;
    var tailLength = numberOfGridCells - body.length;
    var beginningOfNextMonthCells = times(tailLength)
        .map(function (d) { return d + 1; })
        .map(function (d) { return padValue(d); })
        .map(function (nextMonthDay) {
        var monthPlusOne = (~~month + 1).toString();
        var nextMonth = padValue(monthPlusOne === "13" ? "1" : monthPlusOne);
        return (React.createElement(Day, { muted: true, key: nextMonthDay + "-" + (~~month + 1), onClick: function () { return onChange({ month: nextMonth, day: nextMonthDay }); }, onFocus: handleFocus }, nextMonthDay));
    });
    body.push.apply(body, beginningOfNextMonthCells);
    return (React.createElement("div", { className: "w-100 h-100" },
        React.createElement(DaysOfWeek, { style: { marginBottom: 10 } }),
        React.createElement("div", { style: {
                height: "91%",
                width: "100%",
                display: "grid",
                gridTemplateRows: "repeat(" + weeksInMonth + ", 1fr)",
                gridTemplateColumns: "repeat(" + daysInWeek + ", 1fr)"
            }, tabIndex: -1, ref: gridRef }, body)));
}
function Day(_a) {
    var children = _a.children, muted = _a.muted, selected = _a.selected, onClick = _a.onClick, nativeElRef = _a.nativeElRef, onFocus = _a.onFocus;
    var buttonRef = useRef(null);
    var attachRefs = function (el) {
        buttonRef.current = el;
        if (nativeElRef) {
            nativeElRef.current = el;
        }
    };
    var classes = styles.focusable + " " + (selected ? styles.selected : "") + " flex justify-center items-center";
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement(Buttons.Blank, { className: classes, style: __assign({}, size(25), { borderRadius: "50%", backgroundColor: selected ? Color.green400 : "transparent", transition: transition }), onClick: function () {
                buttonRef.current && buttonRef.current.blur();
                onClick && onClick();
            }, nativeElRef: attachRefs, onFocus: onFocus },
            React.createElement(Typography.Small, { muted: muted, color: selected ? Color.trueWhite : undefined }, children))));
}
var DaysOfWeek = function (_a) {
    var style = _a.style;
    return (React.createElement("div", { className: "flex justify-between items-center", style: style }, ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(function (name) { return (React.createElement("div", { key: name, className: "flex justify-center items-center flex-1" },
        React.createElement(Typography.Small, { color: Color.darkGrey }, name))); })));
};
var getMonthData = function (month, year) {
    var monthNumber = ~~month;
    var _a = calculateMonth(monthNumber, year), monthStart = _a[0], daysInMonth = _a[1];
    var previousMonthNumber = monthNumber ? 12 : monthNumber - 1;
    var _b = calculateMonth(previousMonthNumber, year), _ = _b[0], daysInPreviousMonth = _b[1];
    return { monthStart: monthStart, daysInMonth: daysInMonth, daysInPreviousMonth: daysInPreviousMonth };
};
//# sourceMappingURL=index.js.map