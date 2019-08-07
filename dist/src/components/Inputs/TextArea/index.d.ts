import React, { Component } from "react";
import "./TextArea.scss";
interface IProps {
    readOnly?: boolean;
}
declare type TProps = IProps & Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref">;
export default class TextArea extends Component<TProps> {
    static defaultProps: Partial<TProps>;
    inputRef: React.RefObject<HTMLTextAreaElement>;
    constructor(props: TProps);
    render(): JSX.Element;
}
export {};
