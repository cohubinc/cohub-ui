import { PureComponent } from "react";
import { FieldRenderProps } from "react-final-form";
import "./Money.scss";
import HTMLElementProps from "src/definitions/types/HtmlElementProps";
declare type InputValue = number;
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
    input: IInputProp;
    meta?: FormRenderProps["meta"];
    label?: string;
    appearance?: "contrast" | "inverted";
    "data-qa"?: string;
}
declare class MoneyInput extends PureComponent<IProps & HTMLElementProps<HTMLSpanElement>> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export default MoneyInput;
//# sourceMappingURL=index.d.ts.map