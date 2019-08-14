import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const CaretDown = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41,7.84l4.59,4.58l4.59,-4.58l1.41,1.41l-6,6l-6,-6Z"
          fill={color as any}
        />
        <path fill="none" d="M0,-0.75h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default CaretDown;
