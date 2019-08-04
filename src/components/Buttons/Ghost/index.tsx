import React from "react";
import Color from "../../../definitions/enums/Color";
import OutlineButton from "../Outline";
import { IBaseButtonProps } from "../Base";

interface IProps {
  color?: Color;
  light?: boolean;
}

export type TProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;

export const Ghost = ({ color = Color.invertedText, ...props }: TProps) => (
  <OutlineButton backgroundColor={Color.black500} color={color} {...props} />
);

export const PrimaryGhostButton = (props: TProps) => (
  <Ghost color={Color.primary as any} {...props} />
);

export const CancelGhostButton = (props: TProps) => (
  <Ghost color={Color.red500} {...props} />
);

export default Ghost;
