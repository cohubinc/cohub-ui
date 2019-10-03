import React, { Component, CSSProperties } from "react";
import Color from "src/definitions/enums/Color";
import Typography from "src/components/Typography";

import styles from "./Segment.module.scss";

export interface IProps {
  children: React.ReactNode;
  selected: boolean;
  small?: boolean;
  color?: Color;
  style?: CSSProperties;
  onClick?: (event: any) => void;
}
interface IState {
  hasFocus: boolean;
}
export default class Segment extends Component<IProps, IState> {
  state: IState = { hasFocus: false };

  render() {
    const {
      style,
      children,
      selected,
      color = Color.grey500,
      small,
      ...restOfProps
    } = this.props;

    const { hasFocus } = this.state;

    let backgroundColor = Color.outlineGrey;
    if (hasFocus && !selected) {
      backgroundColor = Color.grey300;
    } else if (selected) {
      backgroundColor = color;
    }

    const smallStyle = small ? { height: 24, padding: "3px 11px" } : {};

    return (
      <button
        {...restOfProps}
        className={styles.SplitButtonSegment}
        style={
          {
            backgroundColor,
            filter: hasFocus && selected ? "brightness(90%)" : "none",
            transition: `all 65ms ease-in-out`,
            cursor: "pointer",
            minWidth: 75,
            padding: "1em",
            fontFamily: "Akkurat-Mono",
            fontWeight: "lighter",
            outline: "none",
            border: "none",
            borderRadius: "4px",
            overflow: "hidden",
            ...smallStyle,
            ...style
          } as CSSProperties
        }
      >
        <Typography color={selected ? Color.iconGrey : Color.darkGrey}>
          {children}
        </Typography>
      </button>
    );
  }
}
