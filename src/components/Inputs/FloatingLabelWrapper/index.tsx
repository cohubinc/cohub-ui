import React, { useState, useRef, CSSProperties } from "react";
import isEmpty from "lodash/isEmpty";

import Color, { ContrastColor } from "src/definitions/enums/Color";
import Icon from "src/components/Icon";
import { TIconName } from "src/components/Icon/Icons";

import TInputElementProps from "../definitions/TInputElementProps";
import IComponentProps from "./IComponentProps";
import IRenderProps from "./IRenderProps";

import "./FloatingLabelWrapper.scss";

export interface IFloatingLabelWrapperProps<T = any> {
  onChange?: (...args: any[]) => void;

  value?: T;

  className?: string;
  /**
   * Floating label for the input
   */
  label?: string;

  /**
   * Input is invalid
   */
  error?: boolean;

  appearance?: "contrast" | "inverted";

  /** Render Props function */
  children: (props: IRenderProps<T>) => JSX.Element;

  floatLabel?: boolean;

  labelPosition?: "inside" | "outside" | "intersect";

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

  required?: boolean;

  placeholder?: string;
}

export interface IFloatingLabelIconProps {
  name: TIconName;
  color: Color;
  onClick?: () => void;
}

type TFloatingLabelWrapperProps<T> = IFloatingLabelWrapperProps<T> &
  Pick<TInputElementProps, "onBlur" | "onFocus" | "onClick" | "style">;

const defaultStyle: CSSProperties = {
  color: Color.black as any,
  cursor: "text"
};

export default function FloatingLabelWrapper<T = any>(
  props: TFloatingLabelWrapperProps<T | undefined>
) {
  const {
    className = "",
    appearance,
    onClick,
    style = defaultStyle,
    floatLabel,
    labelPosition = "outside",
    onFocus,
    onBlur,
    icon,
    htmlFor,
    error,
    onChange,
    children,
    label,
    value,
    required,
    "data-qa-label": dataQaLabel = "base-input-element-label"
  } = props;

  const [hasFocus, setHasFocus] = useState(false);

  const { cursor, textAlign } = style;

  const inputRef = useRef<HTMLInputElement>(null);

  let labelTextColor = Color.grey700;
  let inputClassName = "GenericInput";

  switch (appearance) {
    case "contrast":
      labelTextColor = Color.grey700;
      inputClassName = "ContrastInput";
      break;
    case "inverted":
      labelTextColor = Color.trueWhite;
      inputClassName = "GenericInput inverted";
  }

  const isValidString = value && typeof value === "string" && !!value.length;
  const isValidNumber = value && typeof value === "number";
  const isValidObject = value && !isEmpty(value);

  const labelFloated =
    floatLabel ||
    hasFocus ||
    (inputRef.current && inputRef.current.value) ||
    isValidString ||
    isValidNumber ||
    isValidObject;

  const setInputRef = (element: HTMLInputElement) => {
    (inputRef.current as any) = element;
  };

  const componentProps: IComponentProps<typeof value | undefined> = {
    onFocus: (e: any) => {
      onFocus && onFocus(e);
      setHasFocus(true);
    },
    onBlur: (e: any) => {
      onBlur && onBlur(e);
      setHasFocus(false);
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

  const labelPositionClass = () => {
    switch (labelPosition) {
      case "outside":
        return "label-outside";
      case "inside":
        return "label-inside";
      case "intersect":
        return appearance === "contrast" ? "label-outside" : "label-intersect";
      default:
        return "label-outside";
    }
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
        <span className={`bar ${hasFocus ? "focused" : ""}`} />
        {!error && !value && required && (
          <Icon.Asterisk
            size={12}
            color={Color.red300}
            style={{
              position: "absolute",
              right: "4px",
              top: "30%",
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
          className={`${
            labelFloated ? "floatedLabel" : ""
          } ${labelPositionClass()}`}
          style={{
            backgroundColor: error ? (Color.red100 as any) : undefined,
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
