import React from "react";
import { FieldRenderProps } from "react-final-form";
import { guid } from "@cohubinc/cohub-utils";
import styled from "styled-components";

import Icon from "src/components/Icon";
import Color from "src/definitions/enums/Color";

type FieldProps = FieldRenderProps<boolean | string, HTMLInputElement>;
export interface ICheckboxProps {
  label: string;
  input?: Partial<FieldProps["input"]>;
  meta?: FieldProps["meta"];
  id?: string;
  className?: string;
}

const CheckboxFieldContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CheckboxField = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${Color.grey400};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline-width: 0;
  }
`;

export default function({
  label,
  input = {},
  id = guid(),
  className
}: ICheckboxProps) {
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
    <CheckboxFieldContainer className={className}>
      <CheckboxField
        className="CheckboxField mr-05"
        role="checkbox"
        tabIndex={0}
        onKeyDown={keyDown}
        onClick={toggle}
        id={id}
        data-checked={checked}
      >
        {checked && <Icon.Checkmark color={Color.primary} size={16} />}
      </CheckboxField>
      <label htmlFor={id} onClick={toggle} style={{ fontSize: "14px" }}>
        {label}
      </label>
    </CheckboxFieldContainer>
  );
}
