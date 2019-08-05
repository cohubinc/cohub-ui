import React, { PureComponent, CSSProperties } from "react";
import Blank from "../Blank";
import Color from "src/definitions/enums/Color";
import Typography from "src/components/Typography";
import { Props as BlankButtonProps } from "src/components/Buttons/Blank";

interface IProps {
  color?: Color;
  fontSize?: number | string;
  textStyle?: CSSProperties;
  block?: boolean;
}

type TProps = IProps & Omit<BlankButtonProps, "color">;

export default class Text extends PureComponent<TProps> {
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
      ...rest
    } = this.props;

    return (
      <Blank
        {...rest}
        className={`${className} p-05`}
        style={{ display: block ? "block" : undefined, ...style }}
      >
        <Typography
          uppercase
          color={color}
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
