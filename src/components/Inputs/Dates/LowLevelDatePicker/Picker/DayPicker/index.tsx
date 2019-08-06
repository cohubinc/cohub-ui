import React, { CSSProperties, useRef, useEffect, RefObject } from "react";
import times from "lodash/times";
import padStart from "lodash/padStart";

import Typography from "src/components/Typography";
import Color from "src/definitions/enums/Color";
import { size } from "src/helpers/style-utils";
import Buttons from "src/components/Buttons";

import { transition, switchPickerTransitionTime } from "../../constants";
import TPicker from "../../definitions/types/TPicker";
import calculateMonth from "../../lib/calculateMonth";

import styles from "../shared.module.scss";

const padValue = (value?: number | string) =>
  value ? padStart(value.toString(), 2, "0") : "";

interface IProps {
  dateTime: { month: string; day?: string; year?: string };
  onChange: (arg: { month: string; day: string }) => void;
  goToSection: (picker: TPicker) => void;
  picker: TPicker;
}
export default function DayPicker(props: IProps) {
  const { dateTime, onChange, picker, goToSection } = props;
  let { month, day } = dateTime;

  if (!month || month.length < 2) {
    month = padValue(new Date().getMonth().toString());
  }

  const year =
    dateTime.year && dateTime.year.length === 4
      ? dateTime.year
      : new Date().getFullYear().toString();

  const gridRef = useRef<HTMLDivElement>(null);
  const selectedDayRef = useRef<HTMLButtonElement>(null);
  const firstDayRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // If tabbing from the input element apply focus to selected day
    function handleKeydown(event: KeyboardEvent) {
      const { key } = event;
      if (picker !== "day" || key !== "Tab") return;

      const activeEl = document.activeElement;
      const inputHasFocus =
        activeEl && activeEl.classList.contains("DatePickerInput");

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

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [gridRef.current, selectedDayRef.current, picker]);

  // Focus on selected Day or container when section changes to "day" and input isn't focused
  useEffect(() => {
    const activeElement = document.activeElement;

    if (activeElement && activeElement.tagName === "BODY" && picker === "day") {
      setTimeout(() => {
        if (selectedDayRef.current) {
          selectedDayRef.current.focus();
          return;
        }

        gridRef.current && gridRef.current.focus();
      }, switchPickerTransitionTime);
    }
  }, [picker]);

  const { monthStart, daysInMonth, daysInPreviousMonth } = getMonthData(
    month,
    year
  );

  const handleFocus = () => picker !== "day" && goToSection("day");

  const body = times(daysInMonth)
    .map(d => d + 1)
    .map(monthDay => padValue(monthDay))
    .map(monthDay => {
      const selected = monthDay === day;

      const maybeFistDayRef = monthDay === "01" ? firstDayRef : undefined;

      return (
        <Day
          key={monthDay}
          selected={selected}
          nativeElRef={selected ? selectedDayRef : maybeFistDayRef}
          onClick={() => onChange({ month, day: padValue(monthDay) })}
          onFocus={handleFocus}
        >
          {monthDay}
        </Day>
      );
    });

  const previousMonthsDays = times(daysInPreviousMonth + 1);

  // If the month starts on the 5 day of the week take the last 5 days off of the previous month and reverse the array
  const endOfPreviousMonthCells = times(monthStart, () => {
    const previousMonthDay = padValue(previousMonthsDays.pop()!);
    const monthMinusOne = ~~month - 1;
    const previousMonth = monthMinusOne === 0 ? "12" : padValue(monthMinusOne);
    return (
      <Day
        muted
        key={`${previousMonthDay}-${~~month - 1}`}
        onClick={() => {
          onChange({ month: previousMonth, day: previousMonthDay });
        }}
        onFocus={handleFocus}
      >
        {previousMonthDay}
      </Day>
    );
  }).reverse();

  body.unshift(...endOfPreviousMonthCells);

  const cellsInFiveWeekMonth = 35;
  const shouldAddExtraRow = body.length > cellsInFiveWeekMonth;
  const daysInWeek = 7;
  const weeksInMonth = shouldAddExtraRow ? 6 : 5;
  const numberOfGridCells = weeksInMonth * daysInWeek;

  const tailLength = numberOfGridCells - body.length;

  const beginningOfNextMonthCells = times(tailLength)
    .map(d => d + 1)
    .map(d => padValue(d))
    .map(nextMonthDay => {
      const monthPlusOne = (~~month + 1).toString();
      const nextMonth = padValue(monthPlusOne === "13" ? "1" : monthPlusOne);
      return (
        <Day
          muted
          key={`${nextMonthDay}-${~~month + 1}`}
          onClick={() => onChange({ month: nextMonth, day: nextMonthDay })}
          onFocus={handleFocus}
        >
          {nextMonthDay}
        </Day>
      );
    });

  body.push(...beginningOfNextMonthCells);

  return (
    <div className="w-100 h-100">
      <DaysOfWeek style={{ marginBottom: 10 }} />
      <div
        style={{
          height: "91%",
          width: "100%",
          display: "grid",
          gridTemplateRows: `repeat(${weeksInMonth}, 1fr)`,
          gridTemplateColumns: `repeat(${daysInWeek}, 1fr)`
        }}
        tabIndex={-1}
        ref={gridRef}
      >
        {body}
      </div>
    </div>
  );
}

interface IDay {
  children: string | number;
  muted?: boolean;
  selected?: boolean;
  onClick?: () => void;
  nativeElRef?: RefObject<HTMLButtonElement>;
  onFocus: () => void;
}
function Day({
  children,
  muted,
  selected,
  onClick,
  nativeElRef,
  onFocus
}: IDay) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const attachRefs = (el: HTMLButtonElement) => {
    (buttonRef.current as any) = el;
    if (nativeElRef) {
      (nativeElRef.current as any) = el;
    }
  };

  const classes = `${styles.focusable} ${
    selected ? styles.selected : ""
  } flex justify-center items-center`;

  return (
    <div className="flex justify-center items-center">
      <Buttons.Blank
        className={classes}
        style={{
          ...size(25),
          borderRadius: "50%",
          backgroundColor: selected ? (Color.green400 as any) : "transparent",
          transition
        }}
        onClick={() => {
          buttonRef.current && buttonRef.current.blur();
          onClick && onClick();
        }}
        nativeElRef={attachRefs}
        onFocus={onFocus}
      >
        <Typography.Small
          muted={muted}
          color={selected ? (Color.trueWhite as any) : undefined}
        >
          {children}
        </Typography.Small>
      </Buttons.Blank>
    </div>
  );
}

const DaysOfWeek = ({ style }: { style: CSSProperties }) => (
  <div className="flex justify-between items-center" style={style}>
    {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(name => (
      <div key={name} className="flex justify-center items-center flex-1">
        <Typography.Small color={Color.darkGrey}>{name}</Typography.Small>
      </div>
    ))}
  </div>
);

const getMonthData = (month: string, year: string) => {
  const monthNumber = ~~month;
  const [monthStart, daysInMonth] = calculateMonth(monthNumber, year);
  const previousMonthNumber = monthNumber ? 12 : monthNumber - 1;
  const [_, daysInPreviousMonth] = calculateMonth(previousMonthNumber, year);

  return { monthStart, daysInMonth, daysInPreviousMonth };
};
