import React, { CSSProperties, PureComponent } from "react";

import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import Color from "src/definitions/enums/Color";

import styles from "./Segment.module.scss";

export interface ISegmentProps {
  style?: CSSProperties;
  className?: string;
  /**
   * If true, the Segment will get 1rem of padding on all sides
   */
  padded?: boolean;
  /**
   * The level of drop shadow that shows beneath the segment
   */
  elevation?: ElevationLevel;
  /**
   * If true, the Segment will use the contrast background and have no elevation
   */
  contrast?: boolean;
  /**
   * If true, the Segment will show a border
   */
  bordered?: boolean;
}

class Segment extends PureComponent<ISegmentProps> {
  static defaultProps: ISegmentProps = {
    elevation: 1,
    padded: true,
    className: "",
    bordered: false
  };

  render() {
    const {
      className,
      elevation,
      style,
      children,
      padded,
      contrast,
      bordered,
      ...rest
    } = this.props;

    const dpLevel = contrast || bordered ? "dp0" : `dp${elevation}`;
    const classes = `${styles.CohubSegment} ${
      padded ? styles.padded : ""
    } ${className}`;

    return (
      <div
        // apply any data attributes being passed through
        {...rest}
        className={classes}
        style={{
          boxShadow: BoxShadow[dpLevel as any],
          border: bordered ? "1px solid var(--border)" : "",
          backgroundColor: contrast
            ? (Color.grey200 as any)
            : (Color.trueWhite as any),
          ...style
        }}
      >
        {children}
      </div>
    );
  }
}

export default Segment;
