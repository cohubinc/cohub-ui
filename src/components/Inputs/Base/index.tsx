import React from "react";
import TInputElementProps from "../definitions/TInputElementProps";

import FloatingLabelWrapper, {
  IFloatingLabelIconProps
} from "../FloatingLabelWrapper";

export interface IBaseInputProps {
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

  icon?: IFloatingLabelIconProps;
}

export type TBaseInputProps = IBaseInputProps & TInputElementProps;

interface IState {
  hasFocus: boolean;
}

export default class Base extends React.PureComponent<TBaseInputProps, IState> {
  static defaultProps: Partial<TBaseInputProps> = {
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
      icon,
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
          icon,
          value,
          error
        }}
      >
        {({ componentProps }) => <input {...componentProps} {...restProps} />}
      </FloatingLabelWrapper>
    );
  }
}
