import React from "react";
import { FieldRenderProps } from "react-final-form";
import NumberFormat from "react-number-format";
import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInputElementProps from "../definitions/TInputElementProps";

import styles from "./styles.module.scss";

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

interface IDecimalInputProps {
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
  integer?: boolean;
  input: IInputProp;
  meta?: FormRenderProps["meta"];
  label?: string;
  labelPosition?: "inside" | "outside" | "intersect";
  appearance?: "contrast" | "inverted";
  "data-qa"?: string;
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
  ...rest
}: TDecimalInputProps) {
  const showError = !!(meta && meta.touched && meta.error);

  return (
    <div className={styles.input} data-qa={dataQa} {...rest}>
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
