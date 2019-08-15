import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Add = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg version="1.1" viewBox="0 0 24 24" width={size} height={size}>
        <path d="M19,13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2Z" fill={color as any} />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Add;
