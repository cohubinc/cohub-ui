import { PureComponent } from "react";
import HTMLElementProps from "../../definitions/types/HtmlElementProps";
interface IProps extends Omit<HTMLElementProps, "ref"> {
    traceProp?: any;
    centerAlign?: boolean;
    info?: boolean;
    success?: boolean;
    error?: boolean;
}
declare type Props = IProps;
export default class Alert extends PureComponent<Props> {
    render(): JSX.Element;
}
export {};
