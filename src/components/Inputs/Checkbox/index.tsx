import React from "react";
import { FieldRenderProps } from "react-final-form";

import Icon from "src/components/Icon";
import Color from "src/definitions/enums/Color";

import "./Checkbox.scss";
import { guid } from "@cohubinc/cohub-utils";

type FieldProps = FieldRenderProps<boolean | string, HTMLInputElement>;
export interface ICheckboxProps {
  label: string;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
  id?: string;
}

export default function({ label, input = {}, id = guid() }: ICheckboxProps) {
  const checked =
    (input.value && input.value === true) || input.value === "true";

  const toggle = () => {
    input.onChange && input.onChange(!checked as any);
  };

  const keyDown = (evt: any) => {
    if (evt.keyCode && evt.keyCode === 32) {
      toggle();
    }
  };

  return (
    <div className="CheckboxField-Container flex justify-start items-center">
      <div
        className="CheckboxField mr-05"
        role="checkbox"
        tabIndex={0}
        onKeyDown={keyDown}
        onClick={toggle}
        id={id}
        data-checked={checked}
      >
        {checked && <Icon.Checkmark color={Color.primary} size={16} />}
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
