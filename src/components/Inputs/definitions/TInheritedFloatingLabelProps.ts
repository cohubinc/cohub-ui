import { IFloatingLabelWrapperProps } from "../FloatingLabelWrapper";

type TInheritedFloatingLabelProps = Pick<
  IFloatingLabelWrapperProps,
  | "label"
  | "placeholder"
  | "appearance"
  | "labelPosition"
  | "required"
  | "clearable"
  | "icon"
>;

export default TInheritedFloatingLabelProps;
