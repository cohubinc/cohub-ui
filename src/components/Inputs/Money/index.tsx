import React from "react";
import { FieldRenderProps } from "react-final-form";
import NumberFormat from "react-number-format";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInputElementProps from "../definitions/TInputElementProps";

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
  /**
   * Alignment of the input value text
   * @default left
   */
  textAlign?: "left" | "right" | "center";
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
  textAlign = "left",
  ...rest
}: IMoneyInputProps) {
  const error = !!(meta.touched && meta.error);

  return (
    <div data-qa={dataQa} {...rest} style={{ width: "100%" }}>
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
              value={value || 0}
              displayType="input"
              prefix="$"
              placeholder={placeholder}
              decimalScale={extendedPrecision ? 5 : 2}
              fixedDecimalScale
              onValueChange={({ floatValue }) => {
                onChange!(floatValue);
              }}
              style={{ textAlign }}
              thousandSeparator
            />
          );
        }}
      </FloatingLabelWrapper>
    </div>
  );
}
