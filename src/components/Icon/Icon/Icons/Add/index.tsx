import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Add = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0769043 6.99998H13.9231M6.99998 13.9231V0.0769043"
          stroke={color as any}
          strokeWidth="0.75"
        />
      </svg>
    )}
  </IconWrapper>
);

export default Add;
