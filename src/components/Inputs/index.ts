import Base from "./Base";
import Checkbox from "./Checkbox";
import Decimal from "./Decimal";
import Date from "./Dates/Date";
import DateRange from "./Dates/DateRange";
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

const Inputs = {
  Base,
  Checkbox,
  Decimal,
  Date,
  DateRange,
  Money,
  MultiSelect,
  Password,
  Select,
  Text,
  TextArea,
  Toggle
};

export default Inputs;
