import { PureComponent } from "react";
import HTMLElementProps from "../../definitions/types/HtmlElementProps";
export interface IAlertProps extends Omit<HTMLElementProps, "ref"> {
    traceProp?: any;
    centerAlign?: boolean;
    info?: boolean;
    success?: boolean;
    error?: boolean;
}
export default class Alert extends PureComponent<IAlertProps> {
    render(): JSX.Element;
}
