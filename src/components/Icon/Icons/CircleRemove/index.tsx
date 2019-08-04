import React from 'react';

import Color from '../../../../definitions/enums/Color';

import IconWrapper from '../../IconWrapper';
import { IProps } from '../../index';

const CircleRemove = (props: IProps) => (
  <IconWrapper {...props} defaultColor={Color.black}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="6" fill={color as any} fillOpacity="0" />
        <circle
          cx="3"
          cy="3"
          r="2.875"
          stroke={color as any}
          strokeWidth="0.25"
        />
        <path
          d="M1.5314 4.46859L4.46862 1.53138M4.46862 4.46858L1.5314 1.53137"
          stroke={color as any}
          strokeWidth="0.25"
        />
      </svg>
    )}
  </IconWrapper>
);

export default CircleRemove;
