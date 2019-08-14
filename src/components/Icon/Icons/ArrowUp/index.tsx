import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";
import Color from "src/definitions/enums/Color";

const ArrowUp = (props: IProps) => (
  <IconWrapper {...props} defaultColor={Color.primaryGreen}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 8 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.13636 1.27271L4.48198 0.911384L4.13636 0.580799L3.79075 0.911384L4.13636 1.27271ZM7.61834 3.91138L4.48198 0.911384L3.79075 1.63403L6.92712 4.63403L7.61834 3.91138ZM3.79075 0.911384L0.654389 3.91138L1.34561 4.63403L4.48198 1.63403L3.79075 0.911384ZM3.63636 1.40907V10.1363H4.63636V1.40907H3.63636Z"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default ArrowUp;
