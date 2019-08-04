import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Dashboard = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M0,0h24v24h-24Z" fill="none" />
        <path
          fill={color as any}
          d="M3,13h8v-10h-8v10Zm0,8h8v-6h-8v6Zm10,0h8v-10h-8v10Zm0,-18v6h8v-6h-8Z"
        />
      </svg>
    )}
  </IconWrapper>
);

export default Dashboard;
