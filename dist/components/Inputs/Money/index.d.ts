/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import TInputElementProps from "../definitions/TInputElementProps";
import "./Money.scss";
declare type InputValue = number;
declare type FormRenderProps = FieldRenderProps<InputValue, HTMLInputElement>;
declare type FinalFormInputProp = FormRenderProps["input"];
interface IInputProp {
    onBlur?: FinalFormInputProp["onBlur"];
    onChange: (value: InputValue) => void;
    onFocus?: FinalFormInputProp["onFocus"];
    value: FinalFormInputProp["value"];
    required?: boolean;
}
export interface IMoneyInputProps extends TInputElementProps {
    /**
     * Use to extend decimal precision
     */
    extendedPrecision?: boolean;
    input: IInputProp;
    meta?: FormRenderProps["meta"];
    label?: string;
    labelPosition?: "inside" | "outside" | "intersect";
    appearance?: "contrast" | "inverted";
    "data-qa"?: string;
}
export default function MoneyInput({ extendedPrecision, input, meta, label, labelPosition, appearance, required, "data-qa": dataQa, placeholder, ...rest }: IMoneyInputProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map