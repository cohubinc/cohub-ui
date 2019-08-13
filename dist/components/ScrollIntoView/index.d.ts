import React, { Component } from "react";
export interface IScrollIntoViewProps {
    children: JSX.Element[] | JSX.Element;
    traceProp?: any;
    scroll?: boolean;
    style?: any;
    className?: string;
    scrollOpts?: ScrollIntoViewOptions;
}
export default class ScrollIntoView extends Component<IScrollIntoViewProps> {
    selfRef: React.RefObject<HTMLDivElement>;
    static defaultProps: Partial<IScrollIntoViewProps>;
    constructor(props: IScrollIntoViewProps);
    componentDidMount(): void;
    componentDidUpdate(oldProps: IScrollIntoViewProps): void;
    render(): JSX.Element;
    scrollIntoView(): void;
}
