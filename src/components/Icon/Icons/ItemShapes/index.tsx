import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";
import Color from "src/definitions/enums/Color";

interface IItemShapesProps {
  triangleColor?: Color;
  rectangleColor?: Color;
  circleColor?: Color;
}

type TProps = IItemShapesProps & IProps;

const ItemShapes = (props: TProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <rect
          x="7.02438"
          y="2"
          width="10.5366"
          height="17.561"
          fill={(props.rectangleColor || Color.green500) as any}
        />
        <circle
          cx="18.439"
          cy="14"
          r="5.56098"
          fill={(props.circleColor || Color.green300) as any}
        />
        <path
          d="M5.56098 11.3658L10.3769 19.7073H0.745029L5.56098 11.3658Z"
          fill={(props.triangleColor || Color.green700) as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default ItemShapes;
