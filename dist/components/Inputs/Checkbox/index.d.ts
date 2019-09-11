/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import "./Checkbox.scss";
declare type FieldProps = FieldRenderProps<boolean | string, HTMLInputElement>;
interface ICheckboxProps {
    label: string;
    input?: Partial<FieldProps["input"]>;
    meta?: FieldProps["meta"];
    id?: string;
}
export declare type TCheckboxProps = ICheckboxProps;
export default function ({ label, input, id }: TCheckboxProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map