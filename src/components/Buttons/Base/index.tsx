import React, { Fragment } from "react";

import Color from "src/definitions/enums/Color";
import { getInsetColor } from "./getInsetColor";
import AnimatedCheckmark from "src/components/AnimatedCheckmark";
import Typography from "src/components/Typography";

import "./Base.scss";

export interface IBaseButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** Shows success checkmark animation */
  success?: boolean;
  /** Shows error color */
  error?: boolean;
  /**
   * Shows button in raised state
   * @defaultValue true
   */
  raised?: boolean;
  /**
   * Background color of button
   */
  backgroundColor?: Color;
}

export default function Base(props: IBaseButtonProps) {
  let {
    style,
    className = "",
    children,
    success,
    raised = true,
    backgroundColor = Color.grey600,
    disabled,
    error,
    ...restOfProps
  } = props;

  backgroundColor = error ? Color.red500 : backgroundColor;
  const insetColor = raised && getInsetColor(backgroundColor);
  const color = (style && style.color) || "#EFF7EE";

  return (
    <Fragment>
      <button
        className={`CohubButton ${className}`}
        style={{
          backgroundColor: backgroundColor as any,
          boxShadow: raised
            ? `0 2px 3px hsla(0, 0%, 0%, 0.2), inset 0px 2px 0px ${insetColor}`
            : undefined,
          ...style
        }}
        disabled={disabled}
        {...restOfProps}
      >
        <div className="button-text relative">
          {success && (
            <div
              className="flex justify-center items-center absolute w-100"
              style={{ zIndex: 2, bottom: -0.5 }}
            >
              <AnimatedCheckmark size="1.25rem" />
            </div>
          )}

          <Typography
            secondary
            uppercase
            color={color as any}
            style={{
              opacity: success ? 0 : 1,
              transition: "opacity 150ms ease-in"
            }}
          >
            {children}
          </Typography>
        </div>
      </button>
    </Fragment>
  );
}
