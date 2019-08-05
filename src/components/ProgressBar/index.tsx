import React from "react";
import "./ProgressBar.scss";
import Color from "src/definitions/enums/Color";

import styles from "./ProgressBar.module.scss";

interface IProps {
  barHeight: number;
  barColor: string;
  progressColor: string;
  progress: number;
}

export default class ProgressBar extends React.PureComponent<IProps> {
  static defaultProps: Partial<IProps> = {
    barHeight: 8,
    barColor: Color.green200 as any,
    progressColor: Color.primaryGreen as any
  };

  render() {
    const { barHeight, barColor, progressColor, progress } = this.props;

    return (
      <div
        className={styles.Bar}
        style={{ backgroundColor: barColor, height: `${barHeight}px` }}
      >
        <div
          className={styles.Progress}
          style={{ backgroundColor: progressColor, width: `${progress}%` }}
        />
      </div>
    );
  }
}
