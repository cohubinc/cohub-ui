import React, { PureComponent, CSSProperties } from "react";
import Blank from "../Blank";
import Color from "src/definitions/enums/Color";
import Typography from "src/components/Typography";
import { TBlankButtonProps } from "src/components/Buttons/Blank";

interface IProps {
  color?: Color;
  fontSize?: number | string;
  textStyle?: CSSProperties;
  block?: boolean;
}

export type TTextButtonProps = IProps & Omit<TBlankButtonProps, "color">;

export default class Text extends PureComponent<TTextButtonProps> {
  static defaultProps: Partial<IProps> = {
    color: Color.iconGrey,
    fontSize: "12px"
  };

  render() {
    const {
      color,
      fontSize,
      children,
      textStyle,
      block,
      style,
      className = "",
      disabled,
      ...rest
    } = this.props;

    return (
      <Blank
        {...rest}
        disabled={disabled}
        className={`${className} p-05`}
        style={{ display: block ? "block" : undefined, ...style }}
      >
        <Typography
          uppercase
          color={disabled ? Color.grey600 : color}
          weight={500}
          style={{
            fontSize,
            ...textStyle
          }}
          kerning={0.07}
        >
          {children}
        </Typography>
      </Blank>
    );
  }
}
