/// <reference types="react" />
import { FieldRenderProps } from "react-final-form";
import { IProps as DateRangeBaseProps } from "../DateRangeBase";
declare type Val = DateRangeBaseProps["value"];
export declare type TDateRangeInputProps = FieldRenderProps<Val, HTMLInputElement> & Omit<DateRangeBaseProps, "value" | "onChange" | "onFocus" | "onBlur" | "error">;
declare const DateRange: ({ input, meta: { touched, error }, ...rest }: TDateRangeInputProps) => JSX.Element;
export default DateRange;
//# sourceMappingURL=index.d.ts.map