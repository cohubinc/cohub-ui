import React from "react";
import { FieldRenderProps } from "react-final-form";
import NumberFormat from "react-number-format";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInputElementProps from "../definitions/TInputElementProps";
import TInheritedFloatingLabelProps from "../definitions/TInheritedFloatingLabelProps";
import "./styles.scss";

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
  ...rest
}: TDecimalInputProps) {
  const showError = !!(meta && meta.touched && meta.error);

  return (
    <div
      className={`decimal-input align-${textAlign} ${className}`}
      data-qa={dataQa}
      {...rest}
    >
      <FloatingLabelWrapper
        {...input}
        label={label}
        labelPosition={labelPosition}
        error={showError}
        appearance={appearance}
        required={required}
        children={({
          componentProps: { onChange, value, ...restComponentProps },
          setInputRef
        }) => (
          <NumberFormat
            {...restComponentProps}
            getInputRef={setInputRef}
            value={value}
            displayType="input"
            placeholder={placeholder}
            decimalScale={integer ? 0 : extendedPrecision ? 5 : 2}
            onValueChange={({ floatValue }) => {
              onChange!(floatValue);
            }}
            thousandSeparator
          />
        )}
      />
    </div>
  );
}
