import React, { Component, CSSProperties } from "react";
import Color from "src/definitions/enums/Color";
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
    state: IState;
    render(): JSX.Element;
}
export {};
