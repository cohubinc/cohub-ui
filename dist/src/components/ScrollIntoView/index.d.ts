import React, { Component } from "react";
interface IProps {
    children: JSX.Element[] | JSX.Element;
    traceProp?: any;
    scroll?: boolean;
    style?: any;
    className?: string;
    scrollOpts?: ScrollIntoViewOptions;
}
export default class ScrollIntoView extends Component<IProps> {
    selfRef: React.RefObject<HTMLDivElement>;
    static defaultProps: Partial<IProps>;
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(oldProps: IProps): void;
    render(): JSX.Element;
    scrollIntoView(): void;
}
export {};
