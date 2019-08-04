import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Eye = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3627 4.81875C16.2248 4.6215 12.9165 0 8.25 0C3.5835 0 0.27525 4.6215 0.13725 4.81875C-0.04575 5.0775 -0.04575 5.42325 0.13725 5.682C0.27525 5.8785 3.5835 10.5 8.25 10.5C12.9165 10.5 16.2248 5.8785 16.3627 5.682C16.5457 5.4225 16.5457 5.0775 16.3627 4.81875ZM8.25 9C5.1255 9 2.58825 6.31875 1.70175 5.24925C2.586 4.17975 5.115 1.5 8.25 1.5C11.3745 1.5 13.9118 4.182 14.7983 5.25075C13.914 6.321 11.385 9 8.25 9Z"
          transform="translate(0.75 6)"
          fill={color as any}
        />
        <path
          d="M3 0C1.3455 0 0 1.34625 0 3C0 4.6545 1.3455 6 3 6C4.6545 6 6 4.6545 6 3C6 1.34625 4.6545 0 3 0ZM3 4.5C2.17275 4.5 1.5 3.82725 1.5 3C1.5 2.1735 2.17275 1.5 3 1.5C3.82725 1.5 4.5 2.1735 4.5 3C4.5 3.82725 3.82725 4.5 3 4.5Z"
          transform="translate(6 8.25)"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default Eye;
