import { CSSProperties, FocusEvent } from "react";
/**
 * ISO 8601 formated datetime
 * example: 2019-03-08T22:16:08Z"
 */
declare type ISODatetime = string;
export interface IProps {
    className?: string;
    style?: CSSProperties;
    value?: ISODatetime;
    minDate?: ISODatetime;
    onChange: (datetime: ISODatetime) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    setRangeError?: (hasError: boolean) => void;
    setNativeElRef?: (element: HTMLInputElement) => void;
    setHasValue?: (hasVal: boolean) => void;
    inputStyle?: CSSProperties;
    rangeError?: boolean;
    ["data-testid"]?: string;
}
export default function LowLevelDatePicker(props: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map