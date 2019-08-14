/// <reference types="react" />
export interface IAlertProps extends Partial<JSX.IntrinsicElements["div"]> {
    traceProp?: any;
    centerAlign?: boolean;
    info?: boolean;
    success?: boolean;
    error?: boolean;
}
export default function Alert(props: IAlertProps): JSX.Element;
