import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import Icon, { IProps as IIconProps } from "../../Icon";
import Color from "src/definitions/enums/Color";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import Buttons from "..";
import { Props } from "src/components/Buttons/Blank";

interface IProps {
  icon: IIconProps["name"];
  iconColor: IIconProps["color"];
  backgroundColor: Color;
  size: number;
  elevation: ElevationLevel;
}

type TProps = IProps & Props;

export default function FloatingActionButton({
  icon,
  iconColor,
  backgroundColor,
  size = 24,
  elevation = 0,
  ...rest
}: TProps) {
  const dpLevel = `dp${elevation}`;

  return (
    <Buttons.Blank
      className="flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: backgroundColor as any,
        boxShadow: BoxShadow[dpLevel as any],
        cursor: "pointer",
        border: "none"
      }}
      {...rest}
    >
      <Icon name={icon} size={size / 1.5} color={iconColor} />
    </Buttons.Blank>
  );
}
