import React from "react";
import Color from "../../definitions/enums/Color";
interface IProps {
    barHeight: number;
    barColor: Color;
    progressColor: Color;
    progress: number;
}
export default class ProgressBar extends React.PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
