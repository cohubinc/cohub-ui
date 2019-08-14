import React from "react";
import { FieldRenderProps } from "react-final-form";
interface IToggleProps {
    label?: string;
    labelPosition: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare type TToggleProps = IToggleProps & FieldRenderProps<boolean | string, HTMLInputElement>;
export default class Toggle extends React.Component<TToggleProps> {
    static defaultProps: Partial<TToggleProps>;
    render(): JSX.Element;
}
export {};
