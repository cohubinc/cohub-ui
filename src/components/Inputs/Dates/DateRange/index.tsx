import React from "react";
import { FieldRenderProps } from "react-final-form";

import DateRangeBase, { IProps as DateRangeBaseProps } from "../DateRangeBase";

type Val = DateRangeBaseProps["value"];
type Props = FieldRenderProps<Val, HTMLInputElement> &
  Omit<
    DateRangeBaseProps,
    "value" | "onChange" | "onFocus" | "onBlur" | "error"
  >;
const Date = ({ input, meta: { touched, error }, ...rest }: Props) => (
  <DateRangeBase {...input} {...rest} error={touched && !!error} />
);

export default Date;
