import React, { PureComponent } from "react";
import { FieldRenderProps } from "react-final-form";
import NumberFormat from "react-number-format";
import FloatingLabelWrapper from "../FloatingLabelWrapper";

import "./Money.scss";
import HTMLElementProps from "src/definitions/types/HtmlElementProps";

type InputValue = number;

type FormRenderProps = FieldRenderProps<InputValue, HTMLInputElement>;
type FinalFormInputProp = FormRenderProps["input"];

interface IInputProp {
  onBlur?: FinalFormInputProp["onBlur"];
  onChange: (value: InputValue) => void;
  onFocus?: FinalFormInputProp["onFocus"];
  value: FinalFormInputProp["value"];
}

interface IProps {
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

class MoneyInput extends PureComponent<
  IProps & HTMLElementProps<HTMLSpanElement>
> {
  static defaultProps: Partial<IProps> = {
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
      ...spanProps
    } = this.props;

    const showError = !!(meta.touched && meta.error);

    return (
      <span className="CohubMoneyInput" data-qa={dataQa} {...spanProps}>
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
              prefix="$"
              decimalScale={extendedPrecision ? 5 : 2}
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
}

export default MoneyInput;
