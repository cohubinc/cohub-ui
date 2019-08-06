import React, { useState, useRef } from "react";

import Color, { ContrastColor } from "src/definitions/enums/Color";
import HTMLElementProps from "src/definitions/types/HtmlElementProps";

import "./FloatingLabelWrapper.scss";
import IComponentProps from "./IComponentProps";
import OnChangeEvent from "./OnChangeEvent";
import IRenderProps from "./IRenderProps";

import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";

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

  onChange?: OnChangeEvent;

  floatLabel?: boolean;

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
}

type TProps<T> = IFloatingLabelWrapperProps<T> &
  Omit<HTMLElementProps<HTMLInputElement>, "onChange" | "value">;

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
  htmlFor,
  error,
  onChange,
  children,
  label,
  value
}: TProps<T | undefined>) {
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
      <div className={`inputWrapper ${error ? "error" : ""} bd-radius`}>
        {children({
          componentProps,
          setInputRef
        })}
        <span className={`bar ${state.hasFocus ? "focused" : ""}`} />
      </div>

      {label && (
        <label
          className={labelFloated ? "FloatedLabel" : ""}
          style={{
            backgroundColor: error
              ? (Color.red200 as any)
              : inputBackgroundColor,
            color: error
              ? ContrastColor[Color.red200]
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
