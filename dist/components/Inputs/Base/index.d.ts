import React from "react";
import TInputElementProps from "../definitions/TInputElementProps";
export interface IProps {
    /**
     * Floating label for the input
     */
    label?: string;
    /**
     * Input is invalid
     */
    error?: boolean;
    appearance?: "contrast" | "inverted";
    /**
     * HTML attribute for debugging the input
     */
    "data-qa"?: string;
    /**
     * HTML attribute for debugging the label
     */
    "data-qa-label"?: string;
}
declare type TProps = IProps & TInputElementProps;
interface IState {
    hasFocus: boolean;
}
export default class Base extends React.PureComponent<TProps, IState> {
    static defaultProps: Partial<TProps>;
    render(): JSX.Element;
}
export {};
