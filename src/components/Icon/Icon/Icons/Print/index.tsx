import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Print = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg version="1.1" viewBox="0 0 24 24" width={size} height={size}>
        <path
          d="M19,8h-14c-1.66,0 -3,1.34 -3,3v6h4v4h12v-4h4v-6c0,-1.66 -1.34,-3 -3,-3Zm-3,11h-8v-5h8v5Zm3,-7c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1c0,0.55 -0.45,1 -1,1Zm-1,-9h-12v4h12v-4Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Print;
