import { FieldRenderProps } from "react-final-form";
import { IProps as DatePickerBaseProps } from "../DatePickerBase";
declare type Props = FieldRenderProps<string, HTMLInputElement> & Omit<DatePickerBaseProps, "value" | "onChange" | "onFocus" | "onBlur">;
declare const Date: ({ input, meta: { touched, error }, ...rest }: Props) => JSX.Element;
export default Date;
