import React, { useState } from "react";
import { FieldRenderProps } from "react-final-form";

import TInputElementProps from "../definitions/TInputElementProps";
import Base from "../Base";
import Color from "src/definitions/enums/Color";
import Icon from "src/components/Icon";

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

export default function Password(props: TProps) {
  const {
    input,
    meta,
    style,
    className,
    msgPosition = {},
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
          display: "flex",
          alignItems: "center",
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
      />
      <Icon.Eye
        size={24}
        color={Color.grey600}
        style={{ position: "absolute", right: "36px" }}
        className="pointer"
        onClick={() => setVisible(!visible)}
      />
    </div>
  );
}