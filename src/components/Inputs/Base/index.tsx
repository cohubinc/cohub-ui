import React, { ChangeEvent } from "react";
import TInputElementProps from "../definitions/TInputElementProps";

import FloatingLabelWrapper from "../FloatingLabelWrapper";
import TInheritedFloatingLabelProps from "src/components/Inputs/definitions/TInheritedFloatingLabelProps";

export interface IBaseInputProps
  extends Omit<TInputElementProps, "onChange" | "value">,
    Omit<TInheritedFloatingLabelProps, "required"> {
  /**
   * Input is invalid
   */
  error?: boolean;

  /**
   * HTML attribute for debugging the input
   */
  "data-qa"?: string;

  /**
   * HTML attribute for debugging the label
   */
  "data-qa-label"?: string;

  onChange?: (value: string) => void;

  value?: string;
}

export type TBaseInputProps = IBaseInputProps;

export default function Base(props: IBaseInputProps) {
  const {
    type = "text",
    autoComplete = "off",
    autoFocus = false,
    style,
    id,
    className,
    appearance,
    label,
    onChange,
    onClick,
    onFocus,
    onBlur,
    value,
    error,
    icon,
    required,
    labelPosition,
    clearable,
    ...restProps
  } = props;

  return (
    <FloatingLabelWrapper
      data-qa-label={props["data-qa-label"] || "base-input-label"}
      data-qa={props["data-qa"] || "base-input"}
      htmlFor={id}
      onChange={val => onChange && onChange(val || "")}
      {...{
        style,
        className,
        appearance,
        label,
        onClick,
        onFocus,
        onBlur,
        icon,
        value,
        error,
        labelPosition,
        required,
        clearable
      }}
    >
      {({ componentProps: { onChange: _, ...restCmptProps } }) => {
        return (
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onChange && onChange(event.target.value);
            }}
            {...{ type, autoComplete, autoFocus }}
            {...restCmptProps}
            {...restProps}
          />
        );
      }}
    </FloatingLabelWrapper>
  );
}
