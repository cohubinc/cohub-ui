import React, { CSSProperties } from "react";
import { OptionsType, InputActionMeta } from "react-select/src/types";
import { SelectComponents } from "react-select/src/components";
import { FieldRenderProps } from "react-final-form";
import "./Select.scss";
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
    onMenuScrollToBottom?: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
    onMenuScrollToBottomOffset?: number;
    handleScrolledToBottom?: () => void;
    onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
    components?: Partial<SelectComponents<IOption>>;
}
export declare type TSelectProps = ISelectProps;
export default function Select(props: TSelectProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map