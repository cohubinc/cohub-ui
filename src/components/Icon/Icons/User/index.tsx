import React from "react";

import IconWrapper from "../../IconWrapper";
import { IIconProps as IProps } from "../../index";
import guid from "src/helpers/guid";

const User = (props: IProps) => {
  const uniqueId = guid();

  return (
    <IconWrapper {...props}>
      {({ color, size }) => (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <mask
            id={uniqueId}
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={size}
            height={size}
          >
            <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#F2F2F2" />
          </mask>
          <g mask={`url(#${uniqueId})`}>
            <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#F2F2F2" />
            <circle
              cx={size / 2}
              cy={size / 1.0909090909}
              r={size / 3}
              fill="#C4C4C4"
            />
            <circle
              cx={size / 2}
              cy={size / 2.6666666667}
              r={size / 6}
              fill="#C4C4C4"
            />
          </g>
        </svg>
      )}
    </IconWrapper>
  );
};

export default User;
