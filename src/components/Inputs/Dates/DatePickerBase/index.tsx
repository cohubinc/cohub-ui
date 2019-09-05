import React, { useState } from "react";
import LowLevelDatePicker, {
  IProps as ILLDPProps
} from "../LowLevelDatePicker";
import FloatingLabelWrapper, {
  IFloatingLabelWrapperProps as IFLWProps
} from "../../FloatingLabelWrapper";

export type IProps = Omit<ILLDPProps, "setRangeError" | "rangeError"> &
  Pick<IFLWProps, "label" | "error" | "appearance" | "value">;

export default function DatePickerBase({
  onChange,
  value,
  error,
  minDate,
  ...restProps
}: IProps) {
  const [inputHasValue, setInputHasValue] = useState(false);
  const [rangeError, setRangeError] = useState(false);

  return (
    <FloatingLabelWrapper
      floatLabel={inputHasValue}
      error={rangeError || error}
      {...restProps}
      value={value}
      htmlFor="date-picker-input"
    >
      {({
        componentProps: { onChange: _, value: _val, ...cmptProps },
        setInputRef
      }) => {
        return (
          <LowLevelDatePicker
            {...cmptProps}
            {...{ value, onChange, rangeError, setRangeError, minDate }}
            setNativeElRef={setInputRef}
            setHasValue={setInputHasValue}
          />
        );
      }}
    </FloatingLabelWrapper>
  );
}
