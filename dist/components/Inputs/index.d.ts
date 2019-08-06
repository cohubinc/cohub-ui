/// <reference types="react" />
import Base from "./Base";
import Checkbox from "./Checkbox";
import Decimal from "./Decimal";
import Money from "./Money";
import MultiSelect from "./MultiSelect";
import Select from "./Select";
import Text from "./Text";
import TextArea from "./TextArea";
import Toggle from "./Toggle";
declare const Inputs: {
    Base: typeof Base;
    Checkbox: typeof Checkbox;
    Decimal: typeof Decimal;
    Date: ({ input, meta: { touched, error }, ...rest }: import("react-final-form").FieldRenderProps<string, HTMLInputElement> & Pick<import("./Dates/DatePickerBase").IProps, "className" | "style" | "minDate" | "setNativeElRef" | "setHasValue" | "inputStyle" | "data-testid" | "label" | "error" | "appearance">) => JSX.Element;
    DateRange: ({ input, meta: { touched, error }, ...rest }: import("react-final-form").FieldRenderProps<[string, string] | undefined, HTMLInputElement> & Pick<import("./Dates/DateRangeBase").IProps, "className" | "style" | "minDate" | "setNativeElRef" | "inputStyle" | "data-testid" | "label" | "appearance">) => JSX.Element;
    Money: typeof Money;
    MultiSelect: typeof MultiSelect;
    Select: typeof Select;
    Text: typeof Text;
    TextArea: typeof TextArea;
    Toggle: typeof Toggle;
};
export default Inputs;