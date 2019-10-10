import React, { useState } from "react";
import { FieldRenderProps } from "react-final-form";

import TInputElementProps from "../definitions/TInputElementProps";
import Base from "../Base";
import Color from "src/definitions/enums/Color";
import TInheritedFloatingLabelProps from "../definitions/TInheritedFloatingLabelProps";

type FieldProps = FieldRenderProps<string, HTMLInputElement>;
type TFloatingLabelProps = Omit<
  TInheritedFloatingLabelProps,
  "clearable" | "icon" | "required"
>;
interface IPasswordInputProps extends TFloatingLabelProps {
  "data-qa"?: string;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
}

export type TPasswordInputProps = IPasswordInputProps &
  Omit<TInputElementProps, "onChange" | "value" | "required">;

export default function Password(props: TPasswordInputProps) {
  const {
    input,
    meta,
    style,
    className,
    "data-qa": dataQa,
    ...restProps
  } = props;

  const [visible, setVisible] = useState(false);

  const { touched, error } = meta || ({} as any);

  const showError = !!(touched && error);

  return (
    <div
      {...{
        className,
        style: {
          position: "relative",
          ...style
        }
      }}
    >
      <Base
        {...input}
        {...restProps}
        error={showError}
        data-qa={dataQa}
        type={visible ? "text" : "password"}
        style={{ width: "100%" }}
        icon={{
          name: "eye",
          color: Color.grey600,
          onClick: () => {
            setVisible(!visible);
          }
        }}
      />
    </div>
  );
}
