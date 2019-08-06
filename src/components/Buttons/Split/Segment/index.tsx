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
      color = Color.darkBlack,
      small,
      ...restOfProps
    } = this.props;

    const { hasFocus } = this.state;

    let backgroundColor = Color.trueWhite;
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
            border: `1px solid ${color}`,
            transition: `all 65ms ease-in-out`,
            cursor: "pointer",
            minWidth: 75,
            padding: "1em",
            fontFamily: "Akkurat-Mono",
            fontWeight: "lighter",
            outline: "none",
            overflow: "hidden",
            ...smallStyle,
            ...style
          } as CSSProperties
        }
      >
        <Typography color={selected ? Color.trueWhite : color}>
          {children}
        </Typography>
      </button>
    );
  }
}
