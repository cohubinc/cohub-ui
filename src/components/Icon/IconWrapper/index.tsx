import React, { PureComponent } from "react";
import Color from "src/definitions/enums/Color";

import { IIconProps as IParentProps } from "../index";

interface IProps {
  children: (props: { color: Color; size: number }) => JSX.Element;
  defaultColor?: Color;
  color?: Color;
}

export type IWrapperProps = IProps & IParentProps;

class IconWrapper extends PureComponent<IWrapperProps> {
  render() {
    const {
      children,
      color,
      defaultColor = Color.grey500,
      size = 24,
      className = "",
      style,
      onClick,
      disabled
    } = this.props;

    const clickable = onClick && !disabled ? "cursor-pointer" : "";

    return (
      <div
        className={className}
        style={{
          width: size,
          height: size,
          transition: "opacity 300ms ease-in 200ms",
          opacity: disabled ? 0.3 : undefined,
          cursor: clickable ? "pointer" : undefined,
          ...style
        }}
        onClick={disabled ? undefined : onClick}
      >
        <div className="flex justify-center items-center">
          {children({ color: color || defaultColor, size })}
        </div>
      </div>
    );
  }
}

export default IconWrapper;
