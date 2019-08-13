/// <reference types="react" />
interface IProps extends Partial<JSX.IntrinsicElements["div"]> {
    traceProp?: any;
    centerAlign?: boolean;
    info?: boolean;
    success?: boolean;
    error?: boolean;
}
export default function Alert(props: IProps): JSX.Element;
export {};
