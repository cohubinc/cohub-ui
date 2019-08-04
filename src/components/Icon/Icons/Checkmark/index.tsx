import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Checkmark = (props: IProps) => (
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
          d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default Checkmark;
