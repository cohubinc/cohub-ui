import { OptionsType } from "react-select/src/types";
import { FieldRenderProps } from "react-final-form";
import "./Multiselect.scss";
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
export declare type MultiSelectProps = IProps & FieldRenderProps<Array<IOption["value"]>, HTMLElement>;
export default function Multiselect({ options, label, allowCreate, loading, input, appearance }: MultiSelectProps): JSX.Element;
export {};
