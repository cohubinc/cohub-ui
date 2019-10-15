import { IBaseButtonProps } from "../Base";
import { CSSProperties } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface IPrimaryButtonProps {}

type IPrimaryButtonWebProps = IBaseButtonProps &
  IPrimaryButtonProps & {
    style?: CSSProperties | null;
  };

interface IPrimaryButtonIosProps extends IPrimaryButtonProps {
  style?: StyleProp<ViewStyle> | null;
}

export type TPrimaryButtonProps<T = false> = (T extends false
  ? IPrimaryButtonWebProps
  : IPrimaryButtonIosProps) & { native?: T };

// export interface IPrimaryButtonProps {
//   stuff: any
// }
