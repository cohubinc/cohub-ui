import React from "react";
import { FieldRenderProps } from "react-final-form";

import DatePickerBase, {
  IProps as DatePickerBaseProps
} from "../DatePickerBase";

type FieldProps = FieldRenderProps<string, HTMLInputElement>;
type PartialInput = Partial<Omit<FieldProps["input"], "onChange">>;
interface IInput extends PartialInput {
  onChange: DatePickerBaseProps["onChange"];
}
type DatePickerProps = Omit<
  DatePickerBaseProps,
  "value" | "onFocus" | "onBlur" | "onChange"
>;
interface IProps extends DatePickerProps {
  input: IInput;
  meta?: FieldProps["meta"];
}

export type TDateInputProps = IProps;

export default function Date({ input, meta = {}, ...rest }: TDateInputProps) {
  const { touched, error } = meta;

  return <DatePickerBase {...input} {...rest} error={touched && !!error} />;
}
