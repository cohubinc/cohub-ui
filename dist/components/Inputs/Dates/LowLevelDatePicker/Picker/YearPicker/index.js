import React, { useState, useEffect, useRef } from "react";
import rangeRight from "lodash/rangeRight";
import Option from "../Option";
import { switchPickerTransitionTime } from "../../constants";
import ScrollIntoView from "src/components/ScrollIntoView";
import { paddingHorizontal } from "src/helpers/style-utils";
export default function YearPicker(_a) {
    var onChange = _a.onChange, picker = _a.picker, goToSection = _a.goToSection, _b = _a.minDate, minMonth = _b.minMonth, minDay = _b.minDay, minYear = _b.minYear, dateTime = _a.dateTime;
    var containerRef = useRef(null);
    var selectedOptionRef = useRef(null);
    var firstYearRef = useRef(null);
    useEffect(function () {
        // If tabbing from the input element apply focus to selected year
        function handleKeydown(event) {
            var key = event.key;
            if (picker !== "year" || key !== "Tab")
                return;
            var activeEl = document.activeElement;
            var inputHasFocus = activeEl && activeEl.classList.contains("DatePickerInput");
            if (inputHasFocus) {
                event.preventDefault();
                if (selectedOptionRef.current) {
                    selectedOptionRef.current.focus();
                    return;
                }
                firstYearRef.current && firstYearRef.current.focus();
            }
        }
        window.addEventListener("keydown", handleKeydown);
        return function () { return window.removeEventListener("keydown", handleKeydown); };
    }, [selectedOptionRef.current, firstYearRef.current, picker]);
    // Focus on selected option or container when section changes to "year" if not already focused on datepicker input
    useEffect(function () {
        var focusHolderDiv = containerRef.current;
        var selectedOption = selectedOptionRef.current;
        var activeElement = document.activeElement;
        if (activeElement &&
            activeElement.tagName === "BODY" &&
            picker === "year") {
            setTimeout(function () {
                if (selectedOption) {
                    selectedOption.focus();
                    return;
                }
                focusHolderDiv && focusHolderDiv.focus();
            }, switchPickerTransitionTime);
        }
    }, [picker]);
    var _c = useState(false), shouldScrollToYear = _c[0], setShouldScrollToYear = _c[1];
    // Scroll to selected year when section changes to year
    useEffect(function () {
        if (picker === "year") {
            setTimeout(function () {
                setShouldScrollToYear(true);
            }, switchPickerTransitionTime);
            return;
        }
        setShouldScrollToYear(false);
    }, [picker]);
    var years = generateListOfYears({ minMonth: minMonth, minDay: minDay, minYear: minYear }, dateTime);
    return (React.createElement("div", { className: "w-100 h-100", style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(auto, 1fr)",
            rowGap: 36,
            columnGap: 10,
            overflowY: "auto"
        }, ref: containerRef, tabIndex: -1 }, years.map(function (yearName, i) {
        var selected = dateTime.year === yearName;
        var maybeFirstYearRef = i === 0 ? firstYearRef : undefined;
        return (React.createElement("div", { className: "flex justify-center items-center", style: paddingHorizontal(1), key: yearName },
            React.createElement(ScrollIntoView, { scroll: shouldScrollToYear && selected, traceProp: selected },
                React.createElement(Option, { selected: selected, nativeElRef: selected ? selectedOptionRef : maybeFirstYearRef, onClick: function () { return onChange(yearName); }, onFocus: function () { return picker !== "year" && goToSection("year"); } }, yearName))));
    })));
}
function generateListOfYears(_a, _b) {
    var minMonth = _a.minMonth, minDay = _a.minDay, minYear = _a.minYear;
    var month = _b.month, day = _b.day;
    var currentYear = new Date().getFullYear();
    var startingYear = currentYear + 5;
    var buildYearList = function (endYear) {
        if (endYear === void 0) { endYear = minYear; }
        return rangeRight(endYear, startingYear, 1).map(function (y) { return y.toString(); });
    };
    var monthInt = ~~month;
    var dayInt = ~~day;
    if (monthInt < minMonth || (monthInt === minMonth && dayInt < minDay)) {
        return buildYearList(minYear + 1);
    }
    return buildYearList();
}
//# sourceMappingURL=index.js.map