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
  appearance?: "contrast" | "inverted";
  "data-qa"?: string;
}

export type TDecimalInputProps = IDecimalInputProps & TInputElementProps;

export default function DecimalInput({
  input,
  meta,
  label,
  "data-qa": dataQa,
  appearance,
  extendedPrecision = false,
  integer = false,
  ...spanProps
}: TDecimalInputProps) {
  const showError = !!(meta && meta.touched && meta.error);

  return (
    <span className={styles.input} data-qa={dataQa} {...spanProps}>
      <FloatingLabelWrapper
        {...input}
        label={label}
        error={showError}
        appearance={appearance}
        children={({
          componentProps: { onChange, value, ...rest },
          setInputRef
        }) => (
          <NumberFormat
            {...rest}
            getInputRef={setInputRef}
            value={value}
            displayType="input"
            decimalScale={integer ? 0 : extendedPrecision ? 5 : 2}
            onValueChange={({ floatValue }) => {
              onChange!(floatValue);
            }}
            thousandSeparator
          />
        )}
      />
    </span>
  );
}
