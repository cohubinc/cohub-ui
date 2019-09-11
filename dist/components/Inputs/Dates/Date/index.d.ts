/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import { IProps as DatePickerBaseProps } from "../DatePickerBase";
export declare type TDateInputProps = FieldRenderProps<string, HTMLInputElement> & Omit<DatePickerBaseProps, "value" | "onChange" | "onFocus" | "onBlur">;
declare const Date: ({ input, meta: { touched, error }, ...rest }: TDateInputProps) => JSX.Element;
export default Date;
//# sourceMappingURL=index.d.ts.map