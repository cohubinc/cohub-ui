/// <reference types="react" />
import Color from "../../../definitions/enums/Color";
import { TIconName } from "../../Icon/Icons";
import TInputElementProps from "../definitions/TInputElementProps";
import IRenderProps from "./IRenderProps";
import "./FloatingLabelWrapper.scss";
declare type TValue = string | number | undefined | any[] | {
    [key: string]: string;
};
export interface IFloatingLabelWrapperProps<T = TValue> {
    onChange?: (...args: any[]) => void;
    value?: T;
    className?: string;
    /**
     * Floating label for the input
     */
    label?: string;
    /**
     * Input is invalid
     */
    error?: boolean;
    appearance?: "contrast" | "inverted";
    /** Render Props function */
    children: (props: IRenderProps<T>) => JSX.Element;
    floatLabel?: boolean;
    labelPosition?: "inside" | "outside" | "intersect";
    icon?: IFloatingLabelIconProps;
    /**
     * HTML attribute for the label
     * It will be passed back through the render props as id for use with the native input element
     * This prop defaults to whatever the value of the label prop is, which should be sufficient most of the time
     */
    htmlFor?: string;
    /**
     * HTML attribute for debugging the input
     */
    "data-qa"?: string;
    /**
     * HTML attribute for debugging the label
     */
    "data-qa-label"?: string;
    required?: boolean;
    placeholder?: string;
}
export interface IFloatingLabelIconProps {
    name: TIconName;
    color: Color;
    onClick?: () => void;
}
declare type TFloatingLabelWrapperProps<T> = IFloatingLabelWrapperProps<T> & Pick<TInputElementProps, "onBlur" | "onFocus" | "onClick" | "style">;
export default function FloatingLabelWrapper<T = TValue>(props: TFloatingLabelWrapperProps<T | undefined>): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map