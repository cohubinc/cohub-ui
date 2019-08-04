import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const ChevronLeft = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 1L2 12.5L13 24" stroke={color as any} strokeWidth="2" />
      </svg>
    )}
  </IconWrapper>
);

export default ChevronLeft;
