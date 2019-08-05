/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import HTMLElementProps from "src/definitions/types/HtmlElementProps";
declare type InputValue = number | undefined;
declare type FormRenderProps = FieldRenderProps<InputValue, HTMLInputElement>;
declare type FinalFormInputProp = FormRenderProps["input"];
interface IInputProp {
    onBlur?: FinalFormInputProp["onBlur"];
    onChange: (value: InputValue) => void;
    onFocus?: FinalFormInputProp["onFocus"];
    value: FinalFormInputProp["value"];
}
interface IProps {
    /**
     * Use to extend decimal precision
     */
    extendedPrecision?: boolean;
    integer?: boolean;
    input: IInputProp;
    meta?: FormRenderProps["meta"];
    label?: string;
    appearance?: "contrast" | "inverted";
    "data-qa"?: string;
}
declare type TProps = IProps & HTMLElementProps<HTMLSpanElement>;
export default function DecimalInput({ input, meta, label, "data-qa": dataQa, appearance, extendedPrecision, integer, ...spanProps }: TProps): JSX.Element;
export {};
