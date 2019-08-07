import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";
import Color from "src/definitions/enums/Color";

const Triangle = (props: IProps) => (
  <IconWrapper {...props} defaultColor={Color.black}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 0L9.33013 7.5H0.669873L5 0Z" fill={color as any} />
      </svg>
    )}
  </IconWrapper>
);

export default Triangle;
