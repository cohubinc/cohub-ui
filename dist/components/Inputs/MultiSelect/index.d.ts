/// <reference types="react" />
import { OptionsType } from "react-select/src/types";
import { FieldRenderProps } from "react-final-form";
import "./MultiSelect.scss";
interface IOption {
    label: string;
    value: string;
}
interface IProps {
    label?: string;
    options: OptionsType<IOption>;
    allowCreate?: boolean;
    loading?: boolean;
    appearance?: "contrast" | "inverted";
}
export declare type TMultiSelectProps = IProps & FieldRenderProps<Array<IOption["value"]>, HTMLElement>;
export default function MultiSelect({ options, label, allowCreate, loading, input, appearance }: TMultiSelectProps): JSX.Element;
export {};
