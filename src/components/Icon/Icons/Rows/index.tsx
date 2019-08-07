import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Rows = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg version="1.1" viewBox="0 0 24 24" width={size} height={size}>
        <path d="M0,0h24v24h-24Z" fill="none" />
        <path
          fill={color as any}
          d="M3,15h18v-2h-18v2Zm0,4h18v-2h-18v2Zm0,-8h18v-2h-18v2Zm0,-6v2h18v-2h-18Z"
        />
      </svg>
    )}
  </IconWrapper>
);

export default Rows;
