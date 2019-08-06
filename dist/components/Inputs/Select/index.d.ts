import React from "react";
import "./Select.scss";
import { FieldRenderProps } from "react-final-form";
import { OptionsType } from "react-select/src/types";
interface IOption {
    label: string;
    value: string;
}
interface IProps {
    label: string;
    options: OptionsType<IOption>;
    allowCreate?: boolean;
    loading?: boolean;
    appearance?: "contrast" | "inverted";
}
export declare type SelectProps = IProps & FieldRenderProps<IOption["value"] | Array<IOption["value"]>, HTMLElement>;
export default class Select extends React.Component<SelectProps> {
    onChange: (selectedOption: any) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map