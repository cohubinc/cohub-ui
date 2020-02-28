import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps } from "../../index";
import Color from "src/definitions/enums/Color";

const Sync = (props: IIconProps) => (
  <IconWrapper {...props} defaultColor={Color.iconGrey}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12,4v-3l-4,4l4,4v-3c3.31,0 6,2.69 6,6c0,1.01 -0.25,1.97 -0.7,2.8l1.46,1.46c0.78,-1.23 1.24,-2.69 1.24,-4.26c0,-4.42 -3.58,-8 -8,-8Zm0,14c-3.31,0 -6,-2.69 -6,-6c0,-1.01 0.25,-1.97 0.7,-2.8l-1.46,-1.46c-0.78,1.23 -1.24,2.69 -1.24,4.26c0,4.42 3.58,8 8,8v3l4,-4l-4,-4v3Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Sync;
