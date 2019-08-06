import React, { useEffect, useRef } from "react";
import padStart from "lodash/padStart";

import { paddingHorizontal } from "src/helpers/style-utils";
import { months } from "../../constants";
import TPicker from "../../definitions/types/TPicker";
import Option from "../Option";

interface IProps {
  month?: string;
  onChange: (month: string) => void;
  picker: TPicker;
  goToSection: (picker: TPicker) => void;
}
export default function MonthPicker({
  month,
  onChange,
  picker,
  goToSection
}: IProps) {
  const selectedMonth = month && parseInt(month);
  const selectedOptionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // If input has focus and tab key is pressed apply focus to the selected month
    function handleKeydown(event: KeyboardEvent) {
      const { key } = event;
      if (picker !== "month" || key !== "Tab") return;

      const activeEl = document.activeElement;
      const inputHasFocus =
        activeEl && activeEl.classList.contains("DatePickerInput");

      if (inputHasFocus && selectedOptionRef.current) {
        event.preventDefault();
        selectedOptionRef.current.focus();
      }
    }
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedOptionRef.current, picker]);

  return (
    <div
      className="w-100 mt-1"
      style={{
        display: "grid",
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateColumns: "repeat(3, 1fr)",
        rowGap: 36,
        columnGap: 10
      }}
    >
      {months.map((name, i) => {
        const thisMonthNumber = i + 1;
        const selected = selectedMonth === thisMonthNumber;
        const value = padStart(thisMonthNumber.toString(), 2, "0");

        return (
          <div
            className="flex justify-center items-center"
            style={paddingHorizontal(1)}
            key={name}
          >
            <Option
              selected={selected}
              onClick={() => onChange(value)}
              onFocus={() => {
                picker !== "month" && goToSection("month");
              }}
              nativeElRef={selected ? selectedOptionRef : undefined}
              data-testid="month-btn"
            >
              {name}
            </Option>
          </div>
        );
      })}
    </div>
  );
}
