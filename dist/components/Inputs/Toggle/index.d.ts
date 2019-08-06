import React from "react";
import { FieldRenderProps } from "react-final-form";
interface IProps {
    label?: string;
    labelPosition: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare type TProps = IProps & FieldRenderProps<boolean | string, HTMLInputElement>;
export default class Toggle extends React.Component<TProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
