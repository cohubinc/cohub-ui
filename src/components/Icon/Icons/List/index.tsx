import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const List = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg version="1.1" viewBox="0 0 24 24" width={size} height={size}>
        <path
          d="M3,13h2v-2h-2v2Zm0,4h2v-2h-2v2Zm0,-8h2v-2h-2v2Zm4,4h14v-2h-14v2Zm0,4h14v-2h-14v2Zm0,-10v2h14v-2h-14Z"
          fill={color as any}
        />
        <path fill="none" d="M0,0h24v24h-24Z" />
      </svg>
    )}
  </IconWrapper>
);

export default List;
