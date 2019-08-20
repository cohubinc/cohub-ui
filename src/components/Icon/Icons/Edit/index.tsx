import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Edit = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path
          d="M3,17.25v3.75h3.75l11.06,-11.06l-3.75,-3.75l-11.06,11.06Zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z"/>
      </svg>
    )}
  </IconWrapper>
);

export default Edit;
