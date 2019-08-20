import React, { PureComponent } from "react";
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
  appearance?: "contrast" | "inverted";
  "data-qa"?: string;
}

class MoneyInput extends PureComponent<IMoneyInputProps> {
  static defaultProps: Partial<IMoneyInputProps> = {
    extendedPrecision: false
  };

  render() {
    const {
      extendedPrecision,
      input,
      meta = {},
      label,
      "data-qa": dataQa,
      appearance,
      required,
      ...spanProps
    } = this.props;

    const showError = !!(meta.touched && meta.error);

    return (
      <div className="CohubMoneyInput" data-qa={dataQa} {...spanProps}>
        <FloatingLabelWrapper
          {...input}
          label={label}
          error={showError}
          appearance={appearance}
          required={required}
        >
          {({ componentProps: { onChange, value, ...rest }, setInputRef }) => (
            <NumberFormat
              {...rest}
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
}

export default MoneyInput;
