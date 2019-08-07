import React from "react";
import TInputElementProps from "../definitions/TInputElementProps";

import FloatingLabelWrapper from "../FloatingLabelWrapper";

export interface IProps {
  /**
   * Floating label for the input
   */
  label?: string;

  /**
   * Input is invalid
   */
  error?: boolean;

  appearance?: "contrast" | "inverted";

  /**
   * HTML attribute for debugging the input
   */
  "data-qa"?: string;

  /**
   * HTML attribute for debugging the label
   */
  "data-qa-label"?: string;
}

type TProps = IProps & TInputElementProps;

interface IState {
  hasFocus: boolean;
}

export default class Base extends React.PureComponent<TProps, IState> {
  static defaultProps: Partial<TProps> = {
    type: "text",
    autoComplete: "off",
    autoFocus: false,
    "data-qa": "base-input-element",
    "data-qa-label": "base-input-element-label"
  };

  render() {
    const {
      style,
      className,
      appearance,
      label,
      onClick,
      onFocus,
      onBlur,
      onChange,
      value,
      error,
      ...restProps
    } = this.props;

    return (
      <FloatingLabelWrapper
        data-qa-label={this.props["data-qa-label"]}
        {...{
          style,
          className,
          appearance,
          label,
          onClick,
          onFocus,
          onBlur,
          onChange,
          value,
          error
        }}
      >
        {({ componentProps }) => <input {...componentProps} {...restProps} />}
      </FloatingLabelWrapper>
    );
  }
}
