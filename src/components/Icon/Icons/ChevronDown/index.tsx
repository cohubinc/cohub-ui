import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const ChevronDown = (props: IProps) => (
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
          d="M0.730415 1.00001L6.61014 6.07693L12.4899 1.00001"
          stroke={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default ChevronDown;
