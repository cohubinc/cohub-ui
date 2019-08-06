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
import React from "react";
import AnimateHeight from "react-animate-height";
import { size } from "src/helpers/style-utils";
import Segment from "src/components/Segment";
import { steps, showPickerTransitionTime, switchPickerTransitionTime } from "../constants";
import MonthPicker from "./MonthPicker";
import DayPicker from "./DayPicker";
import YearPicker from "./YearPicker";
import SectionNavigation from "./SectionNavigation";
var sectionSize = 300;
export default function Picker(props) {
    var dateTime = props.dateTime, open = props.open, picker = props.picker, goToSection = props.goToSection, setMonth = props.setMonth, setMonthAndDay = props.setMonthAndDay, setYear = props.setYear, style = props.style, minDate = props.minDate;
    var height = open ? "auto" : 0;
    var marginLeft = getOffset(picker) * -1;
    return (React.createElement(AnimateHeight, { style: __assign({ zIndex: 2 }, style), duration: showPickerTransitionTime, height: height, easing: "ease-in", "data-testid": "pickerContainer" },
        React.createElement(Segment, { style: { position: "relative", display: "inline-block" } },
            React.createElement("div", { className: "flex justify-center align-items-center mb-1" },
                React.createElement(SectionNavigation, __assign({}, dateTime, { onClick: goToSection, picker: picker }))),
            React.createElement("div", { style: size(sectionSize) },
                React.createElement("div", { style: { display: "flex", flex: 1, overflow: "hidden" } },
                    React.createElement("div", { id: "section-row", style: { display: "flex", minHeight: "min-content" } },
                        React.createElement(Section, { open: open, style: {
                                marginLeft: marginLeft,
                                transition: "all " + switchPickerTransitionTime + "ms ease-in"
                            } },
                            React.createElement(MonthPicker, __assign({ month: dateTime.month, onChange: setMonth }, { picker: picker, goToSection: goToSection }))),
                        React.createElement(Section, { open: open },
                            React.createElement(DayPicker, __assign({ onChange: setMonthAndDay, dateTime: dateTime }, { picker: picker, goToSection: goToSection }))),
                        React.createElement(Section, { open: open },
                            React.createElement(YearPicker, __assign({ onChange: setYear }, { picker: picker, goToSection: goToSection, minDate: minDate, dateTime: dateTime })))))))));
}
var Section = function (_a) {
    var children = _a.children, style = _a.style, open = _a.open;
    if (!open)
        return null;
    return React.createElement("div", { style: __assign({}, size(sectionSize), style) }, children);
};
// On step one the offset is 0
// increment offset by Section size for every successive step
function getOffset(picker) {
    var stepIndex = steps.indexOf(picker);
    if (stepIndex === 0)
        return 0;
    return stepIndex * sectionSize;
}
//# sourceMappingURL=index.js.map