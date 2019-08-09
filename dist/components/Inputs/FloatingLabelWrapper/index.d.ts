import TInputElementProps from "../definitions/TInputElementProps";
import OnChangeEvent from "./OnChangeEvent";
import IRenderProps from "./IRenderProps";
import "./FloatingLabelWrapper.scss";
export interface IFloatingLabelWrapperProps<T = any> {
    className?: string;
    /**
     * Floating label for the input
     */
    label?: string;
    /**
     * Read only text input
     */
    readOnly?: boolean;
    /**
     * Input is invalid
     */
    error?: boolean;
    appearance?: "contrast" | "inverted";
    /** Render Props function */
    children: (props: IRenderProps<T>) => JSX.Element;
    onChange?: OnChangeEvent;
    floatLabel?: boolean;
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
    value?: T;
}
declare type TProps<T> = IFloatingLabelWrapperProps<T> & Omit<TInputElementProps, "onChange" | "value">;
export default function FloatingLabelWrapper<T = any>({ className, appearance, type, autoComplete, autoFocus, onClick, style, "data-qa": dataQa, "data-qa-label": dataQaLabel, floatLabel, onFocus, onBlur, htmlFor, error, onChange, children, label, value }: TProps<T | undefined>): JSX.Element;
export {};
