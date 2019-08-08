import { IProps as ILowLevelDatePickerProps } from "../LowLevelDatePicker";
import { IFloatingLabelWrapperProps } from "../../FloatingLabelWrapper";
export declare type InheritedProps = Omit<ILowLevelDatePickerProps, "setRangeError" | "rangeError" | "onChange" | "setHasValue" | "value"> & Pick<IFloatingLabelWrapperProps, "label" | "error" | "appearance" | "value">;
declare type StartDate = string;
declare type EndDate = string;
declare type Value = [StartDate, EndDate];
export interface IProps extends InheritedProps {
    onChange: (val: Value, wutChanged: "startDate" | "endDate") => void;
    value: Value | undefined;
}
export default function DateRangeBase({ value, onChange, appearance, error, ...restProps }: IProps): JSX.Element;
export {};
