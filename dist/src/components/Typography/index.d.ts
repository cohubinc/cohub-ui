import { Component } from "react";
import IProps from "./definitions/IProps";
export declare type TTypographyProps = IProps;
export default class Typography extends Component<TTypographyProps> {
    static SuperTitle: (props: IProps) => JSX.Element | null;
    static Title: (props: IProps) => JSX.Element | null;
    static Subtitle: (props: IProps) => JSX.Element | null;
    static HeadingLarge: (props: IProps) => JSX.Element | null;
    static HeadingSmall: (props: IProps) => JSX.Element | null;
    static HeadingTiny: (props: IProps) => JSX.Element | null;
    static Large: (props: IProps) => JSX.Element | null;
    static Small: (props: IProps) => JSX.Element | null;
    static Tiny: (props: IProps) => JSX.Element | null;
    render(): JSX.Element;
}
