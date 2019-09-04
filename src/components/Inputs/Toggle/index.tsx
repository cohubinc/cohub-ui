import React from "react";
import { FieldRenderProps } from "react-final-form";
import Typography from "src/components/Typography";
import Color from "src/definitions/enums/Color";
import styles from "./Toggle.module.scss";

type FieldProps = FieldRenderProps<boolean | string, HTMLInputElement>;
interface IToggleProps {
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  className?: string;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
  "data-qa"?: string;
}

export type TToggleProps = IToggleProps;

export default function Toggle(props: TToggleProps) {
  const {
    label,
    input = {},
    labelPosition = "right",
    className = "",
    "data-qa": dataQa = "toggle"
  } = props;

  const checked = input.value === true || input.value === "true";

  const toggle = () => {
    input.onChange && input.onChange(!checked as any);
  };

  const keyDown = (evt: any) => {
    if (evt.keyCode && evt.keyCode === 32) {
      toggle();
    }
  };

  return (
    <div
      className={`${className} ${deriveClass(labelPosition)} cursor-pointer `}
      onClick={toggle}
      onFocus={input.onFocus as any}
      onBlur={input.onBlur as any}
      tabIndex={0}
      onKeyDown={keyDown}
      data-qa={dataQa}
      data-checked={checked}
    >
      {label && (
        <label>
          <Typography color={Color.grey700}>{label}</Typography>
        </label>
      )}
      <div
        className={checked ? styles.containerActive : styles.containerInactive}
      >
        <div
          className={checked ? styles.toggleActive : styles.toggleInactive}
        />
      </div>
    </div>
  );
}

function deriveClass(labelPosition: IToggleProps["labelPosition"]) {
  switch (labelPosition) {
    case "left":
      return styles.labelContainerLeft;
    case "right":
      return styles.labelContainerRight;
    case "top":
      return styles.labelContainerTop;
    case "bottom":
      return styles.labelContainerBottom;
    default:
      return styles.labelContainerLeft;
  }
}
