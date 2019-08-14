import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Bell = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} version="1.1" viewBox="0 0 24 24">
        <path
          d="M12,22c1.1,0 2,-0.9 2,-2h-4c0,1.1 0.89,2 2,2Zm6,-6v-5c0,-3.07 -1.64,-5.64 -4.5,-6.32v-0.68c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5v0.68c-2.87,0.68 -4.5,3.24 -4.5,6.32v5l-2,2v1h16v-1l-2,-2Z"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default Bell;
