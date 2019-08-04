import React from 'react';
import Color, { ContrastColor } from '../../../../definitions/enums/Color';
import IconWrapper from '../../IconWrapper';
import { IProps } from '../../index';

const CirclePlus = (props: IProps) => (
  <IconWrapper {...props} defaultColor={Color.primary}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="9" r="9" fill={color as any} />
        <path
          d="M2.76904 9.00006H15.2306M8.99981 15.2308V2.76929"
          stroke={ContrastColor[color] as any}
          strokeWidth="0.5"
        />
      </svg>
    )}
  </IconWrapper>
);

export default CirclePlus;
