import React from 'react';

import IconWrapper from '../../IconWrapper';
import { IProps } from '../../index';
import Color from '../../../../definitions/enums/Color';

const Circle = (props: IProps) => (
  <IconWrapper {...props} defaultColor={Color.primaryGreen}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12.5"
          cy="12.5"
          r="11.5"
          fill="none"
          style={{
            stroke: color as any,
            transition: 'stroke 300ms ease-in',
          }}
          strokeWidth="2"
        />
      </svg>
    )}
  </IconWrapper>
);

export default Circle;
