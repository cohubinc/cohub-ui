import React from "react";
import Color from "src/definitions/enums/Color";
import Button, { IBaseButtonProps } from "../Base";

export interface IProps {
  color?: Color;
  light?: boolean;
}

type TProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;

const OutlineButtonBase = ({
  style,
  color = Color.darkBlack,
  ...rest
}: TProps) => (
  <Button
    raised={false}
    backgroundColor={Color.trueWhite}
    style={{ color, border: `.75px solid ${color}`, ...style } as any}
    {...rest}
  />
);

export const Outline = ({ light, color, ...props }: TProps) => {
  if (light) {
    color = Color.grey700;
  }

  return <OutlineButtonBase color={color} {...props} />;
};

export default Outline;
