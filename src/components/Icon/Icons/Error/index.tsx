import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Error = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M0,0h24v24h-24Z" fill="none" />
        <path
          fill={color as any}
          d="M12,2c-5.52,0 -10,4.48 -10,10c0,5.52 4.48,10 10,10c5.52,0 10,-4.48 10,-10c0,-5.52 -4.48,-10 -10,-10Zm1,15h-2v-2h2v2Zm0,-4h-2v-6h2v6Z"
        />
      </svg>
    )}
  </IconWrapper>
);

export default Error;
