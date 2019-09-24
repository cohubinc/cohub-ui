import { IFloatingLabelWrapperProps } from "../FloatingLabelWrapper";

type TInheritedFloatingLabelProps = Pick<
  IFloatingLabelWrapperProps,
  "label" | "placeholder" | "appearance" | "labelPosition" | "required"
>;

export default TInheritedFloatingLabelProps;
