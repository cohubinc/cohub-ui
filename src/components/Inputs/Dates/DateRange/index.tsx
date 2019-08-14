import React from "react";
import { FieldRenderProps } from "react-final-form";

import DateRangeBase, { IProps as DateRangeBaseProps } from "../DateRangeBase";

type Val = DateRangeBaseProps["value"];
export type TDateRangeInputProps = FieldRenderProps<Val, HTMLInputElement> &
  Omit<
    DateRangeBaseProps,
    "value" | "onChange" | "onFocus" | "onBlur" | "error"
  >;
const DateRange = ({
  input,
  meta: { touched, error },
  ...rest
}: TDateRangeInputProps) => (
  <DateRangeBase {...input} {...rest} error={touched && !!error} />
);

export default DateRange;
