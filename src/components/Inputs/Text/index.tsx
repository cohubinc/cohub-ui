import React from "react";
import { FieldRenderProps } from "react-final-form";

import TInputElementProps from "../definitions/TInputElementProps";
import Base from "../Base";
import TInheritedFloatingLabelProps from "../definitions/TInheritedFloatingLabelProps";

type FieldProps = FieldRenderProps<string, HTMLInputElement>;

interface IInput extends Omit<Partial<FieldProps["input"]>, "onChange"> {
  onChange: (value: string) => void;
}

interface ITextInputProps extends TInheritedFloatingLabelProps {
  msgPosition?: {
    bottom: number;
  };
  "data-qa"?: string;
  input?: IInput;
  meta?: FieldProps["meta"];
}

export type TTextInputProps = ITextInputProps &
  Omit<TInputElementProps, "onChange" | "value">;

export default function Text(props: TTextInputProps) {
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
      <Base
        {...(input as any)}
        {...restProps}
        error={showError}
        data-qa={dataQa}
      />
    </div>
  );
}
