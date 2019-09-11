import React, { Component } from "react";
import "./TextArea.scss";
interface ITextAreaProps {
    readOnly?: boolean;
}
export declare type TTextAreaProps = ITextAreaProps & Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref">;
export default class TextArea extends Component<TTextAreaProps> {
    static defaultProps: Partial<TTextAreaProps>;
    inputRef: React.RefObject<HTMLTextAreaElement>;
    constructor(props: TTextAreaProps);
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map