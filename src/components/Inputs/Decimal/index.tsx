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
  value?: FinalFormInputProp["value"];
  required?: boolean;
}

interface IDecimalInputProps extends TInheritedFloatingLabelProps {
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
  integer?: boolean;
  input: IInputProp;
  meta?: FormRenderProps["meta"];
  /**
   * Alignment of the input value text
   * @default left
   */
  textAlign?: "left" | "right" | "center";
  "data-qa"?: string;
  className?: string;
}

export type TDecimalInputProps = IDecimalInputProps & TInputElementProps;

export default function DecimalInput({
  input,
  meta,
  label,
  labelPosition,
  "data-qa": dataQa,
  appearance,
  extendedPrecision = false,
  integer = false,
  required,
  placeholder,
  textAlign = "left",
  className = "",
  clearable,
  ...rest
}: TDecimalInputProps) {
  const error = !!(meta && meta.touched && meta.error);

  return (
    <div
      className={className}
      style={{ width: "100%" }}
      data-qa={dataQa}
      {...rest}
    >
      <FloatingLabelWrapper
        {...input}
        {...{ label, labelPosition, error, appearance, required, clearable }}
        children={({
          componentProps: { onChange, value, ...restComponentProps },
          setInputRef
        }) => {
          return (
            <NumberFormat
              {...restComponentProps}
              getInputRef={setInputRef}
              value={value || ""}
              displayType="input"
              placeholder={placeholder}
              decimalScale={integer ? 0 : extendedPrecision ? 5 : 2}
              onValueChange={({ floatValue }) => {
                onChange!(floatValue);
              }}
              style={{ textAlign }}
              thousandSeparator
            />
          );
        }}
      />
    </div>
  );
}
