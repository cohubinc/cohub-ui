import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";

const ControlPanel = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 2L15 22M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22Z"
          stroke={color as any}
          strokeWidth="2"
        />
      </svg>
    )}
  </IconWrapper>
);

export default ControlPanel;
