/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import TInputElementProps from "../definitions/TInputElementProps";
declare type FieldProps = FieldRenderProps<string, HTMLInputElement>;
interface IProps {
    label?: string;
    appearance?: "contrast" | "inverted";
    msgPosition?: {
        bottom: number;
    };
    "data-qa"?: string;
    input?: Partial<FieldProps["input"]>;
    meta?: FieldProps["meta"];
}
declare type TProps = IProps & Omit<TInputElementProps, "onChange" | "value">;
export default function Text(props: TProps): JSX.Element;
export {};
