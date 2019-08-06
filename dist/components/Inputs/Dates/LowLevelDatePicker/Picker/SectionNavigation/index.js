import React, { useEffect, useState } from "react";
import Buttons from "src/components/Buttons";
import Typography from "src/components/Typography";
import { months, timeItTakesForAllTransitionsToComplete } from "../../constants";
import styles from "./SectionNavigation.module.scss";
import AnimateHeight from "react-animate-height";
export default function DateHeader(_a) {
    var picker = _a.picker, day = _a.day, month = _a.month, year = _a.year, onClick = _a.onClick;
    var hasFullDate = !!(month && day && year);
    var _b = useState(hasFullDate), showActiveState = _b[0], setShowActiveState = _b[1];
    useEffect(function () {
        setTimeout(function () {
            setShowActiveState(hasFullDate);
        }, timeItTakesForAllTransitionsToComplete);
    }, [hasFullDate]);
    return (React.createElement("div", { className: "flex" },
        React.createElement(MonthUnit, { active: showActiveState && picker === "month", onClick: function () {
                onClick("month");
            } }, month),
        React.createElement(DayUnit, { active: showActiveState && picker === "day", onClick: function () {
                onClick("day");
            } }, day),
        React.createElement(YearUnit, { active: showActiveState && picker === "year", onClick: function () {
                onClick("year");
            } }, year)));
}
var MonthUnit = function (_a) {
    // if (!children) return null;
    var active = _a.active, onClick = _a.onClick, children = _a.children;
    return (React.createElement(AnimateHeight, { height: children ? "auto" : 0, style: { display: "inline-block" } },
        React.createElement(DateUnitButton, { active: active, onClick: onClick }, children && months[~~children - 1]),
        "\u00A0"));
};
var DayUnit = function (_a) {
    var active = _a.active, onClick = _a.onClick, children = _a.children;
    return (React.createElement(AnimateHeight, { height: children ? "auto" : 0, style: { display: "inline-block" } },
        React.createElement(DateUnitButton, { active: active, onClick: onClick }, children)));
};
var YearUnit = function (_a) {
    var active = _a.active, onClick = _a.onClick, children = _a.children;
    return (React.createElement(AnimateHeight, { height: children ? "auto" : 0, style: { display: "inline-block" } },
        ",",
        " ",
        React.createElement(DateUnitButton, { active: active, onClick: onClick }, children)));
};
function DateUnitButton(_a) {
    var active = _a.active, children = _a.children, onClick = _a.onClick;
    return (React.createElement(Buttons.Blank, { tabIndex: -1, onClick: onClick, className: styles.action + " " + (active ? styles.active : "") },
        React.createElement(Typography, { bold: true }, children)));
}
//# sourceMappingURL=index.js.map