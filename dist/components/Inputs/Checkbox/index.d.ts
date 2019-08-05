import React from "react";
import { FieldRenderProps } from "react-final-form";
import "./Checkbox.scss";
interface IProps {
    label: string;
}
declare type TProps = IProps & FieldRenderProps<boolean | string, HTMLInputElement>;
export default class Checkbox extends React.Component<TProps> {
    render(): JSX.Element;
}
export {};
