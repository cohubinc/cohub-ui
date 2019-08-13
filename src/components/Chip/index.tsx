import React, { MouseEventHandler, Component } from "react";

import Color from "src/definitions/enums/Color";
import Text from "src/components/Typography";
import Icon, { IProps as IconProps } from "src/components/Icon";
import HtmlElementProps from "src/definitions/types/HtmlElementProps";

import AddChipInput from "./AddChipInput";

import "./Chip.scss";

interface IProps {
  label?: string;
  onDelete?: MouseEventHandler<HTMLElement>;
  checked?: boolean;
  dark?: boolean;
  backgroundColor?: string;
  size?: number;
}

export type TProps = IProps &
  Pick<HtmlElementProps, "onClick" | "className" | "style">;

export default class Chip extends Component<TProps> {
  static Add = AddChipInput;

  static defaultProps: Partial<TProps> = {
    size: 12,
    backgroundColor: Color.grey300 as any
  };

  render() {
    const {
      children,
      label,
      onClick,
      onDelete,
      checked,
      className = "",
      backgroundColor,
      style,
      size
    } = this.props;

    const name = label || children;
    const clickable = !!onClick;

    const clickableClass = clickable ? "clickable" : "";

    let iconName: IconProps["name"] | undefined;
    if (checked) {
      iconName = "checkmark";
    } else if (onDelete) {
      iconName = "close";
    }

    const padding = `${size! / 2.5}px ${size}px`;

    return (
      <div
        className={`CohubChip ${clickableClass} ${className}`}
        style={{
          backgroundColor,
          borderRadius: "361px",
          display: "inline-block",
          padding,
          ...style
        }}
        onClick={onClick}
        tabIndex={clickable ? 0 : undefined}
      >
        <div
          className="flex justify-center items-center h-100"
          style={{ cursor: clickable ? "pointer" : "inherit" }}
        >
          <Text.Small>{name}</Text.Small>

          {iconName && (
            <Icon
              onClick={e => onDelete && onDelete(e as any)}
              size={16}
              name={iconName}
              className="ml-05"
              color={Color.grey800}
            />
          )}
        </div>
      </div>
    );
  }
}
