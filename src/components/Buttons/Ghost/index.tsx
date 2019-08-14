import React from "react";
import Color from "src/definitions/enums/Color";
import OutlineButton from "../Outline";
import { IBaseButtonProps } from "../Base";

export interface IProps {
  color?: Color;
  light?: boolean;
}

export type TGhostButtonProps = IProps &
  Omit<IBaseButtonProps, "raised" | "color">;

export const Ghost = ({
  color = Color.invertedText,
  ...props
}: TGhostButtonProps) => (
  <OutlineButton backgroundColor={Color.black500} color={color} {...props} />
);

export const PrimaryGhostButton = (props: TGhostButtonProps) => (
  <Ghost color={Color.primary as any} {...props} />
);

export const CancelGhostButton = (props: TGhostButtonProps) => (
  <Ghost color={Color.red500} {...props} />
);

export default Ghost;
