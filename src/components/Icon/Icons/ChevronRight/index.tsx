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
        <path d="M1 24L12 12.5L1 1" stroke={color as any} strokeWidth="2" />
      </svg>
    )}
  </IconWrapper>
);

export default ChevronRight;
