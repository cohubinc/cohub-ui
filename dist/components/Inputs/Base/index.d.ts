import React from "react";
import TInputElementProps from "../definitions/TInputElementProps";
import { IFloatingLabelIconProps } from "../FloatingLabelWrapper";
export interface IBaseInputProps {
    /**
     * Floating label for the input
     */
    label?: string;
    /**
     * Input is invalid
     */
    error?: boolean;
    appearance?: "contrast" | "inverted";
    labelPosition?: "inside" | "outside" | "intersect";
    /**
     * HTML attribute for debugging the input
     */
    "data-qa"?: string;
    /**
     * HTML attribute for debugging the label
     */
    "data-qa-label"?: string;
    icon?: IFloatingLabelIconProps;
    placeholder?: string;
}
export declare type TBaseInputProps = IBaseInputProps & TInputElementProps;
interface IState {
    hasFocus: boolean;
}
export default class Base extends React.PureComponent<TBaseInputProps, IState> {
    static defaultProps: Partial<TBaseInputProps>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map