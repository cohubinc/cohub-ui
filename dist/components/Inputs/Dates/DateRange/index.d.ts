import { FieldRenderProps } from "react-final-form";
import { IProps as DateRangeBaseProps } from "../DateRangeBase";
declare type Val = DateRangeBaseProps["value"];
declare type Props = FieldRenderProps<Val, HTMLInputElement> & Omit<DateRangeBaseProps, "value" | "onChange" | "onFocus" | "onBlur" | "error">;
declare const Date: ({ input, meta: { touched, error }, ...rest }: Props) => JSX.Element;
export default Date;
