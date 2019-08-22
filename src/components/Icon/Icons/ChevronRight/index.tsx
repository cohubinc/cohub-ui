import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const ChevronRight = (props: IProps) => (
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
          d="M10,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z"/>
      </svg>
    )}
  </IconWrapper>
);

export default ChevronRight;
