import React from "react";
import { FieldRenderProps } from "react-final-form";

import DatePickerBase, {
  IProps as DatePickerBaseProps
} from "../DatePickerBase";

export type TDateInputProps = FieldRenderProps<string, HTMLInputElement> &
  Omit<DatePickerBaseProps, "value" | "onChange" | "onFocus" | "onBlur">;
const Date = ({
  input,
  meta: { touched, error },
  ...rest
}: TDateInputProps) => (
  <DatePickerBase {...input} {...rest} error={touched && !!error} />
);

export default Date;
