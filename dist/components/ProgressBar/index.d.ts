import React from "react";
import Color from "../../definitions/enums/Color";
export interface IProgressBarProps {
    barHeight: number;
    barColor: Color;
    progressColor: Color;
    progress: number;
}
export default class ProgressBar extends React.PureComponent<IProgressBarProps> {
    static defaultProps: Partial<IProgressBarProps>;
    render(): JSX.Element;
}
