import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const CircleCheck = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="6" fill="black" fillOpacity="0" />
        <circle
          cx="3"
          cy="3"
          r="2.875"
          stroke={color as any}
          strokeWidth="0.25"
        />
        <rect
          width="3"
          height="2.04523"
          fill={color as any}
          fillOpacity="0"
          transform="translate(1.5 1.875)"
        />
        <path
          d="M1.5 2.89243L2.52262 3.91504L4.5 1.875"
          stroke={color as any}
          strokeWidth="0.25"
        />
      </svg>
    )}
  </IconWrapper>
);

export default CircleCheck;
