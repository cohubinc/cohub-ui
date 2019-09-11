/// <reference types="react" />
import Base from "./Base";
import Checkbox from "./Checkbox";
import Decimal from "./Decimal";
import Money from "./Money";
import MultiSelect from "./MultiSelect";
import Password from "./Password";
import Select from "./Select";
import Text from "./Text";
import TextArea from "./TextArea";
import Toggle from "./Toggle";
export { TBaseInputProps } from "./Base";
export { TTextInputProps } from "./Text";
export { TDecimalInputProps } from "./Decimal";
export { TCheckboxProps } from "./Checkbox";
export { TMultiSelectProps } from "./MultiSelect";
export { TSelectProps } from "./Select";
export { TDateInputProps } from "./Dates/Date";
export { TDateRangeInputProps } from "./Dates/DateRange";
export { IMoneyInputProps } from "./Money";
export { TPasswordInputProps } from "./Password";
export { TTextAreaProps } from "./TextArea";
export { TToggleProps } from "./Toggle";
declare const Inputs: {
    Base: typeof Base;
    Checkbox: typeof Checkbox;
    Decimal: typeof Decimal;
    Date: ({ input, meta: { touched, error }, ...rest }: import("./Dates/Date").TDateInputProps) => JSX.Element;
    DateRange: ({ input, meta: { touched, error }, ...rest }: import("./Dates/DateRange").TDateRangeInputProps) => JSX.Element;
    Money: typeof Money;
    MultiSelect: typeof MultiSelect;
    Password: typeof Password;
    Select: typeof Select;
    Text: typeof Text;
    TextArea: typeof TextArea;
    Toggle: typeof Toggle;
};
export default Inputs;
//# sourceMappingURL=index.d.ts.map