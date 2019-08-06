import React, { CSSProperties } from "react";
import AnimateHeight from "react-animate-height";

import { size } from "src/helpers/style-utils";
import Segment from "src/components/Segment";

import TPicker from "../definitions/types/TPicker";
import {
  steps,
  showPickerTransitionTime,
  switchPickerTransitionTime
} from "../constants";
import MonthPicker from "./MonthPicker";
import DayPicker from "./DayPicker";
import YearPicker from "./YearPicker";
import SectionNavigation from "./SectionNavigation";

export interface IPickerProps {
  picker: TPicker;
  dateTime: { month: string; day: string; year: string };
  minDate: { minMonth: number; minDay: number; minYear: number };
  setMonthAndDay: (arg: { month: string; day: string }) => void;
  setMonth: (month: string) => void;
  setYear: (year: string) => void;
  style?: CSSProperties;
  open: boolean;
  goToSection: (picker: TPicker) => void;
}
const sectionSize = 300;
export default function Picker(props: IPickerProps) {
  const {
    dateTime,
    open,
    picker,
    goToSection,
    setMonth,
    setMonthAndDay,
    setYear,
    style,
    minDate
  } = props;
  const height = open ? "auto" : 0;

  const marginLeft = getOffset(picker) * -1;

  return (
    <AnimateHeight
      style={{ zIndex: 2, ...style }}
      duration={showPickerTransitionTime}
      height={height}
      easing="ease-in"
      data-testid="pickerContainer"
    >
      <Segment style={{ position: "relative", display: "inline-block" }}>
        <div className="flex justify-center align-items-center mb-1">
          <SectionNavigation
            {...dateTime}
            onClick={goToSection}
            picker={picker}
          />
        </div>

        <div style={size(sectionSize)}>
          {/** This layout code looks strange but we need it so the row overflows correctly */}
          {/** https://stackoverflow.com/a/21541021/4909966 */}
          <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            <div
              id="section-row"
              style={{ display: "flex", minHeight: "min-content" }}
            >
              <Section
                open={open}
                style={{
                  marginLeft,
                  transition: `all ${switchPickerTransitionTime}ms ease-in`
                }}
              >
                <MonthPicker
                  month={dateTime.month}
                  onChange={setMonth}
                  {...{ picker, goToSection }}
                />
              </Section>

              <Section open={open}>
                <DayPicker
                  onChange={setMonthAndDay}
                  dateTime={
                    dateTime as { day?: string; month: string; year: string }
                  }
                  {...{ picker, goToSection }}
                />
              </Section>

              <Section open={open}>
                <YearPicker
                  onChange={setYear}
                  {...{ picker, goToSection, minDate, dateTime }}
                />
              </Section>
            </div>
          </div>
        </div>
      </Segment>
    </AnimateHeight>
  );
}

interface ISection {
  children: JSX.Element;
  style?: CSSProperties;
  open: boolean;
}
const Section = ({ children, style, open }: ISection) => {
  if (!open) return null;
  return <div style={{ ...size(sectionSize), ...style }}>{children}</div>;
};

// On step one the offset is 0
// increment offset by Section size for every successive step
function getOffset(picker: TPicker) {
  const stepIndex = steps.indexOf(picker);

  if (stepIndex === 0) return 0;

  return stepIndex * sectionSize;
}
