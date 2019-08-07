import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Filter = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path
          d="M10,18h4v-2h-4v2Zm-7,-12v2h18v-2h-18Zm3,7h12v-2h-12v2Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Filter;
