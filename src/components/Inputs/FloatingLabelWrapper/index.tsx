import React, { useState, useRef } from "react";

import Color, { ContrastColor } from "src/definitions/enums/Color";
import TInputElementProps from "../definitions/TInputElementProps";

import IComponentProps from "./IComponentProps";
import IRenderProps from "./IRenderProps";
import "./FloatingLabelWrapper.scss";

import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";
import Icon from "src/components/Icon";
import { TIconName } from "src/components/Icon/Icons";

export interface IFloatingLabelWrapperProps<T = any> {
  className?: string;
  /**
   * Floating label for the input
   */
  label?: string;

  /**
   * Read only text input
   */
  readOnly?: boolean;

  /**
   * Input is invalid
   */
  error?: boolean;

  appearance?: "contrast" | "inverted";

  /** Render Props function */
  children: (props: IRenderProps<T>) => JSX.Element;

  onChange?: (...args: any[]) => void;

  floatLabel?: boolean;

  icon?: IFloatingLabelIconProps;

  /**
   * HTML attribute for the label
   * It will be passed back through the render props as id for use with the native input element
   * This prop defaults to whatever the value of the label prop is, which should be sufficient most of the time
   */
  htmlFor?: string;

  /**
   * HTML attribute for debugging the input
   */
  "data-qa"?: string;

  /**
   * HTML attribute for debugging the label
   */
  "data-qa-label"?: string;

  value?: T;

  required?: boolean;
}

export interface IFloatingLabelIconProps {
  name: TIconName;
  color: Color;
  onClick?: () => void;
}

type TFloatingLabelWrapperProps<T> = IFloatingLabelWrapperProps<T> &
  Omit<TInputElementProps, "onChange" | "value">;

interface IState {
  hasFocus: boolean;
}

const defaultStyle = {
  color: Color.black as any,
  cursor: "text"
};

export default function FloatingLabelWrapper<T = any>({
  className = "",
  appearance,
  type = "text",
  autoComplete = "off",
  autoFocus = false,
  onClick = () => null,
  style = defaultStyle,
  "data-qa": dataQa = "base-input-element",
  "data-qa-label": dataQaLabel = "base-input-element-label",
  floatLabel,
  onFocus,
  onBlur,
  icon,
  htmlFor,
  error,
  onChange,
  children,
  label,
  value,
  required
}: TFloatingLabelWrapperProps<T | undefined>) {
  const [state, setState] = useState<IState>({
    hasFocus: false
  });

  const { cursor, textAlign } = style;

  const inputRef = useRef<HTMLInputElement>(null);

  let labelTextColor;
  let inputBackgroundColor;
  let inputClassName;

  if (appearance === "contrast") {
    labelTextColor = Color.grey700;
    inputClassName = "ContrastInput";
  } else if (appearance === "inverted") {
    labelTextColor = Color.trueWhite;
    inputClassName = "GenericInput inverted";
  } else {
    labelTextColor = Color.grey700;
    inputBackgroundColor = Color.trueWhite;
    inputClassName = "GenericInput";
  }

  const isValidString = value && typeof value === "string" && value.length > 0;
  const isValidNumber = value && typeof value === "number" && isNumber(value);
  const isValidOject = value && !isEmpty(value);

  const labelFloated =
    floatLabel ||
    state.hasFocus ||
    (inputRef.current && inputRef.current.value) ||
    isValidString ||
    isValidNumber ||
    isValidOject;

  const setInputRef = (element: HTMLInputElement) => {
    (inputRef.current as any) = element;
  };

  const componentProps: IComponentProps<typeof value | undefined> = {
    onFocus: (e: any) => {
      onFocus && onFocus(e);
      setState({ hasFocus: true });
    },
    onBlur: (e: any) => {
      onBlur && onBlur(e);
      setState({ hasFocus: false });
    },
    style: {
      ...defaultStyle,
      ...{
        cursor,
        textAlign
      }
    },
    // So the label is associated with the input. Mostly for easier testing
    id: htmlFor,
    ["aria-invalid"]: error,
    onClick,
    onChange,
    value
  };

  return (
    <div
      className={`FloatingLabelWrapper ${inputClassName} ${className}`}
      style={{
        position: "relative",
        ...defaultStyle,
        ...style
      }}
    >
      <div
        className={`${label ? "inputWrapper" : "noLabelInputWrapper"} ${
          error ? "error" : ""
        } bd-radius`}
      >
        {children({
          componentProps,
          setInputRef
        })}
        <span className={`bar ${state.hasFocus ? "focused" : ""}`} />
        {!error && required && (
          <Icon.Asterisk
            size={12}
            color={Color.red300}
            style={{
              position: "absolute",
              right: "4px",
              top: "25%",
              transform: "translateY(-50%)",
              zIndex: 2
            }}
          />
        )}
        {error && (
          <Icon.Error
            size={20}
            color={Color.red400}
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2
            }}
          />
        )}
        {!error && icon && (
          <Icon
            name={icon.name}
            size={20}
            color={icon.color as any}
            onClick={icon.onClick}
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2
            }}
          />
        )}
      </div>

      {label && (
        <label
          className={labelFloated ? "FloatedLabel" : ""}
          style={{
            backgroundColor: error
              ? (Color.red100 as any)
              : inputBackgroundColor,
            color: error
              ? ContrastColor[Color.red100]
              : (labelTextColor as any),
            cursor,
            width: labelFloated ? undefined : "80%"
          }}
          onClick={(e: any) => {
            onClick && onClick(e);
            inputRef.current && inputRef.current.focus();
          }}
          data-qa={dataQaLabel}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
    </div>
  );
}
