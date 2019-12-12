import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const ImportExport = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path
          d="M9,3l-4,3.99h3v7.01h2v-7.01h3l-4,-3.99Zm7,14.01v-7.01h-2v7.01h-3l4,3.99l4,-3.99h-3Z"
          fill={color as any}
        ></path>
        <path fill="none" d="M0,0h24v24h-24Z"></path>
      </svg>
    )}
  </IconWrapper>
);

export default ImportExport;
