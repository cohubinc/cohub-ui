import React from "react";
import { FieldRenderProps } from "react-final-form";
import HTMLElementProps from "../../../definitions/types/HtmlElementProps";
interface IProps {
    label?: string;
    appearance?: "contrast" | "inverted";
    msgPosition?: {
        bottom: number;
    };
    "data-qa"?: string;
}
declare type TProps = IProps & FieldRenderProps<string, HTMLInputElement> & HTMLElementProps<HTMLInputElement>;
export default class Text extends React.Component<TProps> {
    static defaultProps: Partial<TProps>;
    render(): JSX.Element;
}
export {};
