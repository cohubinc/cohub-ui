import React from "react";
import "./ProgressBar.scss";
interface IProps {
    barHeight: number;
    barColor: string;
    progressColor: string;
    progress: number;
}
export default class ProgressBar extends React.PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
