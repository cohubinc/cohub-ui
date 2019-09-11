import React, { CSSProperties } from "react";
import SelectField from "react-select";
import { OptionsType, InputActionMeta } from "react-select/src/types";
import { FieldRenderProps } from "react-final-form";
import "./Select.scss";
import { SelectComponents } from "react-select/src/components";
interface IOption {
    label: string;
    value: string;
}
declare type FieldProps = FieldRenderProps<IOption["value"] | Array<IOption["value"]>, HTMLElement>;
interface ISelectProps {
    label?: string;
    options?: OptionsType<IOption>;
    loading?: boolean;
    appearance?: "contrast" | "inverted";
    error?: boolean;
    clearable?: boolean;
    style?: CSSProperties;
    input?: Partial<FieldProps["input"]>;
    meta?: FieldProps["meta"];
    required?: boolean;
    onMenuScrollToBottom?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    handleScrolledToBottom?: () => void;
    onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
    ref?: React.RefObject<SelectField<IOption>> | null;
    components?: Partial<SelectComponents<IOption>>;
}
export declare type TSelectProps = ISelectProps;
export default function Select(props: TSelectProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map