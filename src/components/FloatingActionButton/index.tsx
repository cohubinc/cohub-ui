import React from "react";
import Icon, { IProps as IIconProps } from "../Icon";
import Color from "src/definitions/enums/Color";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";

interface IProps {
  icon: IIconProps["name"];
  iconColor: IIconProps["color"];
  backgroundColor: Color;
  size: number;
  elevation: ElevationLevel;
  onClick: () => void;
}

export default function FloatingActionButton(props: IProps) {
  const {
    icon,
    backgroundColor,
    size,
    iconColor,
    elevation = 0,
    onClick
  } = props;

  const dpLevel = `dp${elevation}`;

  return (
    <div
      className="flex items-center justify-center pointer"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: backgroundColor as any,
        boxShadow: BoxShadow[dpLevel as any],
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <Icon name={icon} size={size / 1.5} color={iconColor} />
    </div>
  );
}
