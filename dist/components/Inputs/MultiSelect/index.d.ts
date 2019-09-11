import { CSSProperties } from "react";
import { OptionsType } from "react-select/src/types";
import { FieldRenderProps } from "react-final-form";
import "./Multiselect.scss";
interface IOption {
    label: string;
    value: string;
}
declare type FieldProps = FieldRenderProps<string[], HTMLElement>;
declare type Input = FieldProps["input"];
interface IProps {
    label?: string;
    options?: OptionsType<IOption>;
    allowCreate?: boolean;
    loading?: boolean;
    appearance?: "contrast" | "inverted";
    clearable?: boolean;
    style?: CSSProperties;
    input?: Partial<Input>;
    meta?: FieldProps["meta"];
    disabled?: boolean;
    required?: boolean;
}
export declare type TMultiSelectProps = IProps;
export default function MultiSelect({ options, input, label, allowCreate, loading, appearance, clearable, style, meta, disabled, required }: TMultiSelectProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map