import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Back = (props: IProps) => (
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
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default Back;
