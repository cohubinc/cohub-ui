/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import TInputElementProps from "../definitions/TInputElementProps";
declare type FieldProps = FieldRenderProps<string, HTMLInputElement>;
interface IPasswordInputProps {
    label?: string;
    labelPosition?: "inside" | "outside" | "intersect";
    appearance?: "contrast" | "inverted";
    msgPosition?: {
        bottom: number;
    };
    "data-qa"?: string;
    input?: Partial<FieldProps["input"]>;
    meta?: FieldProps["meta"];
}
export declare type TPasswordInputProps = IPasswordInputProps & Omit<TInputElementProps, "onChange" | "value">;
export default function Password(props: TPasswordInputProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map