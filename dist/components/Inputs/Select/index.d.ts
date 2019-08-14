import React from "react";
import "./Select.scss";
import { FieldRenderProps } from "react-final-form";
import { OptionsType, ValueType } from "react-select/src/types";
interface IOption {
    label: string;
    value: string;
}
interface ISelectProps {
    label: string;
    options: OptionsType<IOption>;
    allowCreate?: boolean;
    loading?: boolean;
    appearance?: "contrast" | "inverted";
}
export declare type TSelectProps = ISelectProps & FieldRenderProps<IOption["value"] | Array<IOption["value"]>, HTMLElement>;
export default class Select extends React.Component<TSelectProps> {
    onChange: (selectedOption: ValueType<{
        label: string;
        value: string;
    }>) => void;
    render(): JSX.Element;
}
export {};
