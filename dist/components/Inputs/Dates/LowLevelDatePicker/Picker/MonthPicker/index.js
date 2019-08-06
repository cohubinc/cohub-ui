import React, { useEffect, useRef } from "react";
import padStart from "lodash/padStart";
import { paddingHorizontal } from "src/helpers/style-utils";
import { months } from "../../constants";
import Option from "../Option";
export default function MonthPicker(_a) {
    var month = _a.month, onChange = _a.onChange, picker = _a.picker, goToSection = _a.goToSection;
    var selectedMonth = month && parseInt(month);
    var selectedOptionRef = useRef(null);
    useEffect(function () {
        // If input has focus and tab key is pressed apply focus to the selected month
        function handleKeydown(event) {
            var key = event.key;
            if (picker !== "month" || key !== "Tab")
                return;
            var activeEl = document.activeElement;
            var inputHasFocus = activeEl && activeEl.classList.contains("DatePickerInput");
            if (inputHasFocus && selectedOptionRef.current) {
                event.preventDefault();
                selectedOptionRef.current.focus();
            }
        }
        window.addEventListener("keydown", handleKeydown);
        return function () { return window.removeEventListener("keydown", handleKeydown); };
    }, [selectedOptionRef.current, picker]);
    return (React.createElement("div", { className: "w-100 mt-1", style: {
            display: "grid",
            gridTemplateRows: "repeat(4, 1fr)",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: 36,
            columnGap: 10
        } }, months.map(function (name, i) {
        var thisMonthNumber = i + 1;
        var selected = selectedMonth === thisMonthNumber;
        var value = padStart(thisMonthNumber.toString(), 2, "0");
        return (React.createElement("div", { className: "flex justify-center items-center", style: paddingHorizontal(1), key: name },
            React.createElement(Option, { selected: selected, onClick: function () { return onChange(value); }, onFocus: function () {
                    picker !== "month" && goToSection("month");
                }, nativeElRef: selected ? selectedOptionRef : undefined, "data-testid": "month-btn" }, name)));
    })));
}
//# sourceMappingURL=index.js.map