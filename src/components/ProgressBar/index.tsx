import React from "react";
import Color from "src/definitions/enums/Color";

import styles from "./ProgressBar.module.scss";

export interface IProgressBarProps {
  barHeight: number;
  barColor: Color;
  progressColor: Color;
  progress: number;
}

export default class ProgressBar extends React.PureComponent<
  IProgressBarProps
> {
  static defaultProps: Partial<IProgressBarProps> = {
    barHeight: 8,
    barColor: Color.green200 as any,
    progressColor: Color.primaryGreen as any
  };

  render() {
    const { barHeight, barColor, progressColor, progress } = this.props;

    return (
      <div
        className={styles.Bar}
        style={{ backgroundColor: barColor as any, height: `${barHeight}px` }}
      >
        <div
          className={styles.Progress}
          style={{
            backgroundColor: progressColor as any,
            width: `${progress}%`
          }}
        />
      </div>
    );
  }
}
