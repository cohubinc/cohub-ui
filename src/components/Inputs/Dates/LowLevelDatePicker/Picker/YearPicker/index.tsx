import React, { useState, useEffect, useRef } from "react";
import rangeRight from "lodash/rangeRight";

import ScrollIntoView from "src/components/ScrollIntoView";
import { paddingHorizontal } from "src/helpers/style-utils";
import { switchPickerTransitionTime } from "../../constants";
import TPicker from "../../definitions/types/TPicker";
import Option from "../Option";

interface IProps {
  onChange: (year: string) => void;
  picker: TPicker;
  goToSection: (picker: TPicker) => void;
  minDate: { minMonth: number; minDay: number; minYear: number };
  dateTime: { month: string; day: string; year: string };
}
export default function YearPicker({
  onChange,
  picker,
  goToSection,
  minDate: { minMonth, minDay, minYear },
  dateTime
}: IProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOptionRef = useRef<HTMLButtonElement>(null);
  const firstYearRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // If tabbing from the input element apply focus to selected year
    function handleKeydown(event: KeyboardEvent) {
      const { key } = event;
      if (picker !== "year" || key !== "Tab") return;

      const activeEl = document.activeElement;
      const inputHasFocus =
        activeEl && activeEl.classList.contains("DatePickerInput");

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

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedOptionRef.current, firstYearRef.current, picker]);

  // Focus on selected option or container when section changes to "year" if not already focused on datepicker input
  useEffect(() => {
    const focusHolderDiv = containerRef.current;
    const selectedOption = selectedOptionRef.current;

    const activeElement = document.activeElement;

    if (
      activeElement &&
      activeElement.tagName === "BODY" &&
      picker === "year"
    ) {
      setTimeout(() => {
        if (selectedOption) {
          selectedOption.focus();
          return;
        }
        focusHolderDiv && focusHolderDiv.focus();
      }, switchPickerTransitionTime);
    }
  }, [picker]);

  const [shouldScrollToYear, setShouldScrollToYear] = useState(false);
  // Scroll to selected year when section changes to year
  useEffect(() => {
    if (picker === "year") {
      setTimeout(() => {
        setShouldScrollToYear(true);
      }, switchPickerTransitionTime);
      return;
    }

    setShouldScrollToYear(false);
  }, [picker]);

  const years = generateListOfYears({ minMonth, minDay, minYear }, dateTime);

  return (
    <div
      className="w-100 h-100"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(auto, 1fr)",
        rowGap: 36,
        columnGap: 10,
        overflowY: "auto"
      }}
      ref={containerRef}
      tabIndex={-1}
    >
      {years.map((yearName, i) => {
        const selected = dateTime.year === yearName;

        const maybeFirstYearRef = i === 0 ? firstYearRef : undefined;

        return (
          <div
            className="flex justify-center items-center"
            style={paddingHorizontal(1)}
            key={yearName}
          >
            <ScrollIntoView
              scroll={shouldScrollToYear && selected}
              traceProp={selected}
            >
              <Option
                selected={selected}
                nativeElRef={selected ? selectedOptionRef : maybeFirstYearRef}
                onClick={() => onChange(yearName)}
                onFocus={() => picker !== "year" && goToSection("year")}
              >
                {yearName}
              </Option>
            </ScrollIntoView>
          </div>
        );
      })}
    </div>
  );
}

function generateListOfYears(
  { minMonth, minDay, minYear }: IProps["minDate"],
  { month, day }: IProps["dateTime"]
) {
  const currentYear = new Date().getFullYear();
  const startingYear = currentYear + 5;
  const buildYearList = (endYear = minYear) =>
    rangeRight(endYear, startingYear, 1).map(y => y.toString());

  const monthInt = ~~month;
  const dayInt = ~~day;

  if (monthInt < minMonth || (monthInt === minMonth && dayInt < minDay)) {
    return buildYearList(minYear + 1);
  }

  return buildYearList();
}
