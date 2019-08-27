import React from "react";
import { FieldRenderProps } from "react-final-form";
import NumberFormat from "react-number-format";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInputElementProps from "../definitions/TInputElementProps";

import "./Money.scss";

type InputValue = number;

type FormRenderProps = FieldRenderProps<InputValue, HTMLInputElement>;
type FinalFormInputProp = FormRenderProps["input"];

interface IInputProp {
  onBlur?: FinalFormInputProp["onBlur"];
  onChange: (value: InputValue) => void;
  onFocus?: FinalFormInputProp["onFocus"];
  value: FinalFormInputProp["value"];
  required?: boolean;
}

export interface IMoneyInputProps extends TInputElementProps {
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
  input: IInputProp;
  meta?: FormRenderProps["meta"];
  label?: string;
  labelPosition?: "inside" | "outside" | "intersect";
  appearance?: "contrast" | "inverted";
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
  ...rest
}: IMoneyInputProps) {
  const showError = !!(meta.touched && meta.error);

  return (
    <div className="CohubMoneyInput" data-qa={dataQa} {...rest}>
      <FloatingLabelWrapper
        {...input}
        label={label}
        labelPosition={labelPosition}
        error={showError}
        appearance={appearance}
        required={required}
      >
        {({
          componentProps: { onChange, value, ...restComponentProps },
          setInputRef
        }) => (
          <NumberFormat
            {...restComponentProps}
            getInputRef={setInputRef}
            value={value}
            displayType="input"
            prefix="$"
            decimalScale={extendedPrecision ? 5 : 2}
            onValueChange={({ floatValue }) => {
              onChange!(floatValue);
            }}
            thousandSeparator
          />
        )}
      </FloatingLabelWrapper>
    </div>
  );
}
