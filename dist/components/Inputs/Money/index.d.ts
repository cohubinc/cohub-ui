import { PureComponent } from "react";
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
}
export interface IMoneyInputProps extends TInputElementProps {
    /**
     * Use to extend decimal precision
     */
    extendedPrecision?: boolean;
    input: IInputProp;
    meta?: FormRenderProps["meta"];
    label?: string;
    appearance?: "contrast" | "inverted";
    "data-qa"?: string;
}
declare class MoneyInput extends PureComponent<IMoneyInputProps> {
    static defaultProps: Partial<IMoneyInputProps>;
    render(): JSX.Element;
}
export default MoneyInput;
