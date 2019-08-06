import React from "react";
import { FieldRenderProps } from "react-final-form";

import DatePickerBase, {
  IProps as DatePickerBaseProps
} from "../DatePickerBase";

type Props = FieldRenderProps<string, HTMLInputElement> &
  Omit<DatePickerBaseProps, "value" | "onChange" | "onFocus" | "onBlur">;
const Date = ({ input, meta: { touched, error }, ...rest }: Props) => (
  <DatePickerBase {...input} {...rest} error={touched && !!error} />
);

export default Date;
