import React from "react";
interface IProps {
    label?: string;
    labelPosition: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare type TProps = IProps & any;
export default class Toggle extends React.Component<TProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
