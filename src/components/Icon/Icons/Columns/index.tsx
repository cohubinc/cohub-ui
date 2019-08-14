import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const Columns = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} version="1.1" viewBox="0 0 24 24">
        <path
          d="M10,18h5v-13h-5v13Zm-6,0h5v-13h-5v13Zm12,-13v13h5v-13h-5Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default Columns;
