import React from "react";
import { FieldRenderProps } from "react-final-form";
import NumberFormat from "react-number-format";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInputElementProps from "../definitions/TInputElementProps";

import "./Money.scss";
import TInheritedFloatingLabelProps from "../definitions/TInheritedFloatingLabelProps";

type InputValue = number | undefined;

type FormRenderProps = FieldRenderProps<InputValue, HTMLInputElement>;
type FinalFormInputProp = FormRenderProps["input"];

interface IInputProp {
  onBlur?: FinalFormInputProp["onBlur"];
  onChange: (value: InputValue) => void;
  onFocus?: FinalFormInputProp["onFocus"];
  value: FinalFormInputProp["value"];
  required?: boolean;
}

export interface IMoneyInputProps
  extends TInputElementProps,
    TInheritedFloatingLabelProps {
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
  input: IInputProp;
  meta?: FormRenderProps["meta"];
  "data-qa"?: string;
}

export default function MoneyInput({
  extendedPrecision = false,
  input,
  meta = {},
  label,
  labelPosition,
  appearance,
  required,
  "data-qa": dataQa,
  placeholder,
  clearable,
  ...rest
}: IMoneyInputProps) {
  const error = !!(meta.touched && meta.error);

  return (
    <div className="CohubMoneyInput" data-qa={dataQa} {...rest}>
      <FloatingLabelWrapper
        {...input}
        {...{ label, labelPosition, clearable, error, appearance, required }}
      >
        {({
          componentProps: { onChange, value, ...restComponentProps },
          setInputRef
        }) => {
          return (
            <NumberFormat
              {...restComponentProps}
              getInputRef={setInputRef}
              value={value || ""}
              displayType="input"
              prefix="$"
              placeholder={placeholder}
              decimalScale={extendedPrecision ? 5 : 2}
              onValueChange={({ floatValue }) => {
                onChange!(floatValue);
              }}
              thousandSeparator
            />
          );
        }}
      </FloatingLabelWrapper>
    </div>
  );
}
