import React from "react";
import { FieldRenderProps } from "react-final-form";
import "./Checkbox.scss";
interface ICheckboxProps {
    label: string;
}
export declare type TCheckboxProps = ICheckboxProps & FieldRenderProps<boolean | string, HTMLInputElement>;
export default class Checkbox extends React.Component<TCheckboxProps> {
    render(): JSX.Element;
}
export {};
