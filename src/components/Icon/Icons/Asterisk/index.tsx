import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Asterisk = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M0,0h24v24h-24Z" fill="none"/>
        <path
          fill={color as any}
          d="M21,10h-5.535l2.767,-4.794l-3.463,-2l-2.769,4.794l-2.768,-4.794l-3.463,2l2.769,4.794h-5.538v4h5.537l-2.768,4.795l3.463,2l2.769,-4.797l2.768,4.795l3.463,-2l-2.767,-4.793h5.535Z"
        />
      </svg>
    )}
  </IconWrapper>
);

export default Asterisk;
