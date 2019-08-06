import React, { useEffect, useState } from "react";

import Buttons from "src/components/Buttons";
import Typography from "src/components/Typography";

import {
  months,
  timeItTakesForAllTransitionsToComplete
} from "../../constants";
import TPicker from "../../definitions/types/TPicker";
import styles from "./SectionNavigation.module.scss";
import AnimateHeight from "react-animate-height";

interface IProps {
  month?: string;
  day?: string;
  year?: string;
  onClick: (picker: TPicker) => void;
  picker: TPicker;
}
export default function DateHeader({
  picker,
  day,
  month,
  year,
  onClick
}: IProps) {
  const hasFullDate = !!(month && day && year);
  const [showActiveState, setShowActiveState] = useState(hasFullDate);

  useEffect(() => {
    setTimeout(() => {
      setShowActiveState(hasFullDate);
    }, timeItTakesForAllTransitionsToComplete);
  }, [hasFullDate]);

  return (
    <div className="flex">
      <MonthUnit
        active={showActiveState && picker === "month"}
        onClick={() => {
          onClick("month");
        }}
      >
        {month}
      </MonthUnit>
      <DayUnit
        active={showActiveState && picker === "day"}
        onClick={() => {
          onClick("day");
        }}
      >
        {day}
      </DayUnit>
      <YearUnit
        active={showActiveState && picker === "year"}
        onClick={() => {
          onClick("year");
        }}
      >
        {year}
      </YearUnit>
    </div>
  );
}

interface IDateUnitButtonProps {
  onClick?: () => void;
  children?: string;
  active: boolean;
}
const MonthUnit = ({ active, onClick, children }: IDateUnitButtonProps) => {
  // if (!children) return null;

  return (
    <AnimateHeight
      height={children ? "auto" : 0}
      style={{ display: "inline-block" }}
    >
      <DateUnitButton active={active} onClick={onClick}>
        {children && months[~~children - 1]}
      </DateUnitButton>
      &nbsp;
    </AnimateHeight>
  );
};
const DayUnit = ({ active, onClick, children }: IDateUnitButtonProps) => (
  <AnimateHeight
    height={children ? "auto" : 0}
    style={{ display: "inline-block" }}
  >
    <DateUnitButton active={active} onClick={onClick}>
      {children}
    </DateUnitButton>
  </AnimateHeight>
);
const YearUnit = ({ active, onClick, children }: IDateUnitButtonProps) => {
  return (
    <AnimateHeight
      height={children ? "auto" : 0}
      style={{ display: "inline-block" }}
    >
      ,{" "}
      <DateUnitButton active={active} onClick={onClick}>
        {children}
      </DateUnitButton>
    </AnimateHeight>
  );
};
function DateUnitButton({ active, children, onClick }: IDateUnitButtonProps) {
  return (
    <Buttons.Blank
      tabIndex={-1}
      onClick={onClick}
      className={`${styles.action} ${active ? styles.active : ""}`}
    >
      <Typography bold>{children}</Typography>
    </Buttons.Blank>
  );
}
