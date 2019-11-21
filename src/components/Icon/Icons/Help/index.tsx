import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Help = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M0,0h24v24h-24Z" fill="none"></path>
        <path
          fill={color as any}
          d="M11,18h2v-2h-2v2Zm1,-16c-5.52,0 -10,4.48 -10,10c0,5.52 4.48,10 10,10c5.52,0 10,-4.48 10,-10c0,-5.52 -4.48,-10 -10,-10Zm0,18c-4.41,0 -8,-3.59 -8,-8c0,-4.41 3.59,-8 8,-8c4.41,0 8,3.59 8,8c0,4.41 -3.59,8 -8,8Zm0,-14c-2.21,0 -4,1.79 -4,4h2c0,-1.1 0.9,-2 2,-2c1.1,0 2,0.9 2,2c0,2 -3,1.75 -3,5h2c0,-2.25 3,-2.5 3,-5c0,-2.21 -1.79,-4 -4,-4Z"
        ></path>
      </svg>
    )}
  </IconWrapper>
);

export default Help;
