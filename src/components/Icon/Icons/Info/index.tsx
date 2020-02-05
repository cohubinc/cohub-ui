import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Info = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M0,0h24v24h-24Z" fill="none"></path>
        <path
          fill={color as any}
          d="M11,17h2v-6h-2v6Zm1,-15c-5.52,0 -10,4.48 -10,10c0,5.52 4.48,10 10,10c5.52,0 10,-4.48 10,-10c0,-5.52 -4.48,-10 -10,-10Zm0,18c-4.41,0 -8,-3.59 -8,-8c0,-4.41 3.59,-8 8,-8c4.41,0 8,3.59 8,8c0,4.41 -3.59,8 -8,8Zm-1,-11h2v-2h-2v2Z"
        ></path>
      </svg>
    )}
  </IconWrapper>
);

export default Info;
