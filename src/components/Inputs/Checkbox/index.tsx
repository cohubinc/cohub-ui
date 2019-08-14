import React from "react";
import { FieldRenderProps } from "react-final-form";
import "./Checkbox.scss";
import Icon from "src/components/Icon";
import Color from "src/definitions/enums/Color";

interface ICheckboxProps {
  label: string;
}

export type TCheckboxProps = ICheckboxProps &
  FieldRenderProps<boolean | string, HTMLInputElement>;

export default class Checkbox extends React.Component<TCheckboxProps> {
  render() {
    const { label, input } = this.props;

    const checked = input.value === true || input.value === "true";

    const toggle = () => {
      input.onChange(!checked as any);
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
        >
          {checked && <Icon.Checkmark color={Color.primary} size={16} />}
        </div>
        <label>{label}</label>
      </div>
    );
  }
}
