import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Trash = (props: IProps) => (
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
          d="M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2v-12h-12v12Zm13,-15h-3.5l-1,-1h-5l-1,1h-3.5v2h14v-2Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Trash;
