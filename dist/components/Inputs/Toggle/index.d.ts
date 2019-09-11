/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
declare type FieldProps = FieldRenderProps<boolean | string, HTMLInputElement>;
interface IToggleProps {
    label?: string;
    labelPosition?: "top" | "bottom" | "left" | "right";
    className?: string;
    input?: Partial<FieldProps["input"]>;
    meta?: FieldProps["meta"];
    "data-qa"?: string;
}
export declare type TToggleProps = IToggleProps;
export default function Toggle(props: TToggleProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map