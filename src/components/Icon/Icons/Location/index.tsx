import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps } from "../../index";
import Color from "src/definitions/enums/Color";

const Location = (props: IIconProps) => (
  <IconWrapper {...props} defaultColor={Color.iconGrey}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M15,11v-6l-3,-3l-3,3v2h-6v14h18v-10h-6Zm-8,8h-2v-2h2v2Zm0,-4h-2v-2h2v2Zm0,-4h-2v-2h2v2Zm6,8h-2v-2h2v2Zm0,-4h-2v-2h2v2Zm0,-4h-2v-2h2v2Zm0,-4h-2v-2h2v2Zm6,12h-2v-2h2v2Zm0,-4h-2v-2h2v2Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Location;
