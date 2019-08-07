import React from "react";
import { FieldRenderProps } from "react-final-form";

import TInputElementProps from "../definitions/TInputElementProps";
import Base from "../Base";

type FieldProps = FieldRenderProps<string, HTMLInputElement>;

interface IProps {
  label?: string;
  appearance?: "contrast" | "inverted";
  msgPosition?: {
    bottom: number;
  };
  "data-qa"?: string;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
}

type TProps = IProps & Omit<TInputElementProps, "onChange" | "value">;

export default function Text(props: TProps) {
  const {
    input,
    meta,
    style,
    className,
    msgPosition = {},
    "data-qa": dataQa,
    ...restProps
  } = props;

  const { touched, error } = meta || ({} as any);

  const showError = !!(touched && error);

  return (
    <div {...{ className, style: { width: "100%", ...style } }}>
      <Base {...input} {...restProps} error={showError} data-qa={dataQa} />
    </div>
  );
}
