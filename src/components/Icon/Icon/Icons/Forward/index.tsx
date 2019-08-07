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
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default Back;
