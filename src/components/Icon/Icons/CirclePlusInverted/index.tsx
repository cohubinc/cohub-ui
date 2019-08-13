import React from "react";

import Color from "src/definitions/enums/Color";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const CirclePlusInverted = (props: IProps) => (
  <IconWrapper {...props} defaultColor={Color.primaryGreen}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9"
          cy="9"
          r="8.75"
          stroke={color as any}
          strokeWidth="0.5"
        />
        <path
          d="M2.76904 9.00006H15.2306M8.99981 15.2308V2.76929"
          stroke={color as any}
          strokeWidth="0.5"
        />
      </svg>
    )}
  </IconWrapper>
);

export default CirclePlusInverted;
