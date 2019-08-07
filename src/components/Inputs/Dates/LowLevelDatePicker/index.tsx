import React, {
  useMemo,
  useRef,
  CSSProperties,
  useState,
  useEffect,
  KeyboardEvent,
  FocusEvent
} from "react";
import moment from "moment";
import NumberFormat from "react-number-format";

import renderDate from "src/helpers/render-dates";
import { isInt } from "src/helpers/input-validations";

import calculateMonth from "./lib/calculateMonth";
import TPicker from "./definitions/types/TPicker";
import {
  steps,
  optionTransitionTime,
  timeItTakesForAllTransitionsToComplete
} from "./constants";
import Picker, { IPickerProps } from "./Picker";

import styles from "./LowLevelDatePicker.module.scss";
import useAttentionWithin from "src/hooks/useAttentionWithin";

interface IMonthDayYear {
  month: string;
  day: string;
  year: string;
}

/**
 * ISO 8601 formated datetime
 * example: 2019-03-08T22:16:08Z"
 */
type ISODatetime = string;
export interface IProps {
  className?: string;
  style?: CSSProperties;
  value?: ISODatetime;
  minDate?: ISODatetime;
  onChange: (datetime: ISODatetime) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  setRangeError?: (hasError: boolean) => void;
  setNativeElRef?: (element: HTMLInputElement) => void;
  setHasValue?: (hasVal: boolean) => void;
  inputStyle?: CSSProperties;
  rangeError?: boolean;
  ["data-testid"]?: string;
}

export default function LowLevelDatePicker(props: IProps) {
  const {
    value,
    onChange,
    className = "",
    style,
    setRangeError = (arg: boolean) => arg,
    setNativeElRef,
    setHasValue,
    inputStyle,
    rangeError,
    minDate,
    onFocus,
    ["data-testid"]: testId = "LowLevelDatePickerInput",
    ...restProps
  } = props;

  const humanizedDate = useMemo(() => humanizeDate(value) || "", [value]);
  const [minYear = 1980, minMonth = 1, minDay = 1] = minDate
    ? minDate.split("-").map(unit => ~~unit)
    : [];

  const [formatedInputValue, setFormatedInputValue] = useState("");
  const [picker, setPicker] = useState<TPicker>("month");
  const [showPicker, setShowPicker] = useState(false);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [pickerFocused, setPickerFocused] = useState(false);

  const dateTime = buildTimeMap({ month, day, year }, humanizedDate);

  const inputRef = useRef<HTMLInputElement>(null);
  const thisRef = useRef<HTMLDivElement>(null);
  useAttentionWithin(thisRef, () => setShowPicker(false));
  const hasValue = !!value;

  useEffect(() => {
    setHasValue && setHasValue(showPicker || hasValue);
  }, [showPicker, hasValue]);

  // On first render initialize local state with incoming value date
  useEffect(() => {
    const units = humanizedDate ? humanizedDate.split("-") : null;
    if (units) {
      // initialize our local date state
      setMonth(units[0]);
      setDay(units[1]);
      setYear(units[2]);
    }
  }, []);

  const stepForward = () => setPicker(prevPicker => getNextStep(prevPicker));

  function closePicker() {
    setTimeout(() => {
      setPickerFocused(false);
      setShowPicker(false);
      setPicker("month");
    }, optionTransitionTime);
  }

  // Give time for animation to play after new state is set
  function buildSetter<Payload = string>(setFunc: (p: Payload) => void) {
    return (payload: Payload) => {
      const isFinalStep = steps.indexOf(picker) === steps.length - 1;

      setPickerFocused(true);

      setFunc(payload);

      setTimeout(
        () => {
          stepForward();
          isFinalStep && closePicker();
        },
        isFinalStep
          ? timeItTakesForAllTransitionsToComplete
          : optionTransitionTime
      );
    };
  }

  function transitionToPicker(payload: TPicker) {
    setTimeout(() => {
      setPicker(payload);
    }, optionTransitionTime * 2);
  }

  function clearLocallyStoredDates() {
    setMonth("");
    setDay("");
    setYear("");
    setFormatedInputValue("");
  }

  const monthDayYear = [month, day, year].filter(unit => !!unit).join("-");
  const derivedInputValue = !!monthDayYear.length
    ? `${monthDayYear}${"MM-DD-YYYY".slice(monthDayYear.length)}`
    : "";

  const inputValue = pickerFocused
    ? derivedInputValue || humanizedDate
    : formatedInputValue || humanizedDate;

  return (
    <div
      className={className}
      style={{ position: "relative", ...style }}
      ref={thisRef}
    >
      <NumberFormat
        {...restProps}
        value={inputValue}
        className={`LowLevelDatePickerInput ${styles.input}`}
        displayType="input"
        format="##-##-####"
        mask={["M", "M", "D", "D", "Y", "Y", "Y", "Y"]}
        getInputRef={(el: HTMLInputElement) => {
          (inputRef.current as any) = el;
          setNativeElRef && setNativeElRef(el);
        }}
        onFocus={e => {
          onFocus && onFocus(e);
          setShowPicker(true);
          setPickerFocused(false);
          inputRef.current && inputRef.current.select();
          // Init local input state
          setFormatedInputValue(derivedInputValue);
        }}
        onKeyDown={({ key }: KeyboardEvent<HTMLInputElement>) => {
          if (key === "Enter") {
            if (showPicker) {
              if ([month, day, year].every(unit => !!unit)) {
                const newDate = dateTimeToISO({ month, day, year });
                onChange(newDate);
              }
              setPickerFocused(false);
              clearLocallyStoredDates();
              closePicker();
            } else {
              setShowPicker(true);
            }
          }
        }}
        onChange={({ target: { value: formattedValue } }) => {
          setFormatedInputValue(formattedValue);

          !showPicker && setShowPicker(true);

          if (formattedValue === "") {
            value && onChange("");
          }

          const [m = "", d = "", y = ""] = parseFormatedValue(formattedValue);

          // month validation logic
          const monthInt = ~~m;
          const checkMonth = (min = 1) => monthInt >= min && monthInt < 13;

          // day validation logic
          const yearString =
            y.length === 4 ? y : new Date().getFullYear().toString();
          const [_, daysInMonth = 31] = calculateMonth(m, yearString);
          const dayInt = ~~d;
          const checkDay = (min = 1) =>
            dayInt >= min && dayInt < daysInMonth + 1;

          // year validation logic
          const yearInt = ~~y;
          const fiveYearsFromNow = new Date().getFullYear() + 5;
          const yearInRange = yearInt >= minYear && yearInt < fiveYearsFromNow;
          const yearIsMinYear = yearInt === minYear;

          if (y) {
            if (y.length === 4) {
              const monthInRange = yearIsMinYear
                ? checkMonth(minMonth)
                : checkMonth();

              const dayInRange =
                yearIsMinYear && monthInt === minMonth
                  ? checkDay(minDay)
                  : checkDay();

              if (yearInRange && monthInRange && dayInRange) {
                setRangeError(false);
                setYear(y);
                setTimeout(() => {
                  onChange(dateTimeToISO({ month: m, day: d, year: y }));
                  clearLocallyStoredDates();
                  closePicker();
                }, optionTransitionTime);
                return;
              } else {
                setRangeError(true);
                return;
              }
            } else {
              setRangeError(false);
              setShowPicker(true);
            }
          }

          if (m) {
            if (m.length === 2) {
              if (checkMonth()) {
                setMonth(m);
                transitionToPicker("day");
              } else {
                setRangeError(true);
                transitionToPicker("month");
                return;
              }
            } else {
              setMonth("");
              transitionToPicker("month");
              return;
            }
          } else {
            setMonth("");
            transitionToPicker("month");
            return;
          }

          if (d) {
            if (d.length === 2) {
              if (checkDay()) {
                setDay(d);
                setRangeError(false);
                transitionToPicker("year");
              } else {
                setRangeError(true);
                transitionToPicker("day");
              }
            } else {
              setRangeError(false);
            }
          } else {
            setDay("");
            setRangeError(false);
            transitionToPicker("day");
          }
        }}
        data-testid={testId}
        aria-invalid={rangeError ? true : false}
        style={inputStyle}
      />

      <Picker
        style={{ position: "absolute", top: 50 }}
        open={showPicker}
        minDate={{ minMonth, minDay, minYear }}
        {...{ picker, dateTime }}
        setMonthAndDay={buildSetter<Omit<IMonthDayYear, "year">>(payload => {
          setMonth(payload.month);
          setDay(payload.day);
        })}
        setMonth={buildSetter(payload => setMonth(payload))}
        setYear={payload => {
          setYear(payload);
          setTimeout(() => {
            const newDate = dateTimeToISO({ month, day, year: payload });
            onChange(newDate);
            setPickerFocused(false);
            clearLocallyStoredDates();
          }, optionTransitionTime);
          closePicker();
        }}
        goToSection={setPicker}
      />
    </div>
  );
}

const finalStep = steps.length - 1;
function getNextStep(picker: TPicker) {
  const currentStep = steps.indexOf(picker);
  const nextStepIndex = currentStep === finalStep ? 0 : currentStep + 1;
  return steps[nextStepIndex];
}
const buildTimeMap = (
  { month, day, year }: IMonthDayYear,
  /** Formated date string: "09-09-1984" */
  humanizedDate: string = ""
): IPickerProps["dateTime"] => {
  const [m, d, y] = humanizedDate.split("-");

  return {
    month: month || m,
    day: day || d,
    year: year || y
  };
};

const dateTimeToISO = ({ month, day, year }: IMonthDayYear) => {
  return moment(`${year}-${month}-${day}`, "Y-M-D").format("YYYY-MM-DD");
};

// formattedValue will look something like this -> "1M-DD-YYYY"
const parseFormatedValue = (formattedValue: string) =>
  formattedValue.split("-").map(unit => {
    // get rid of those pesky letters
    if (isInt(unit)) {
      return unit;
    }
    const parsedUnit = parseInt(unit);

    if (parsedUnit === 0) return parsedUnit.toString();

    return (parsedUnit || "").toString();
  });

function humanizeDate(value?: string) {
  if (!value) return "";

  if (value.length < 10) {
    return value
      .split("-")
      .reverse()
      .join("-");
  }
  return renderDate("input")(value);
}
