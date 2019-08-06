/// <reference types="react" />
import { IProps as ILLDPProps } from "../LowLevelDatePicker";
import { IFloatingLabelWrapperProps as IFLWProps } from "../../FloatingLabelWrapper";
export declare type IProps = Omit<ILLDPProps, "setRangeError" | "rangeError"> & Pick<IFLWProps, "label" | "error" | "appearance" | "value">;
export default function DatePickerBase({ onChange, value, error, minDate, ...restProps }: IProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map