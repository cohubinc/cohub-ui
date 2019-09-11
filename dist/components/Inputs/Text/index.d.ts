/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import TInputElementProps from "../definitions/TInputElementProps";
declare type FieldProps = FieldRenderProps<string, HTMLInputElement>;
interface ITextInputProps {
    label?: string;
    labelPosition?: "inside" | "outside" | "intersect";
    appearance?: "contrast" | "inverted";
    msgPosition?: {
        bottom: number;
    };
    "data-qa"?: string;
    input?: Partial<FieldProps["input"]>;
    meta?: FieldProps["meta"];
    placeholder?: string;
}
export declare type TTextInputProps = ITextInputProps & Omit<TInputElementProps, "onChange" | "value">;
export default function Text(props: TTextInputProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map