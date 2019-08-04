import React from "react";

import IconWrapper from "../../IconWrapper";
import { IProps } from "../../index";

const Sales = (props: IProps) => (
  <IconWrapper {...props}>
    {({ color, size }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.4065 1.4375C24.0377 1.20875 23.579 1.18875 23.1902 1.3825L18.8402 3.5575L15.6927 1.46C15.2727 1.18 14.7265 1.18 14.3065 1.46L11.1602 3.5575L6.81024 1.3825C6.42274 1.18875 5.96274 1.20875 5.59399 1.4375C5.22524 1.665 5.00024 2.06625 5.00024 2.5V27.5C5.00024 27.9338 5.22524 28.335 5.59399 28.5638C5.95274 28.7888 6.41524 28.8163 6.81024 28.6188L11.1602 26.4438L14.3077 28.54C14.7277 28.8213 15.274 28.8213 15.694 28.54L18.8402 26.4438L23.1915 28.6188C23.5802 28.8125 24.039 28.7925 24.4077 28.5638C24.7752 28.335 25.0002 27.9338 25.0002 27.5V2.5C25.0002 2.06625 24.7752 1.665 24.4065 1.4375ZM22.5002 25.4775L19.309 23.8825C18.9065 23.6813 18.4277 23.7113 18.0565 23.96L15.0002 25.9975L11.944 23.96C11.7352 23.8213 11.4927 23.75 11.2502 23.75C11.0602 23.75 10.8665 23.7938 10.6915 23.8825L7.50024 25.4775V4.52375L10.6915 6.1175C11.0915 6.3175 11.5702 6.28875 11.944 6.03875L15.0002 4.0025L18.0565 6.03875C18.429 6.28875 18.9077 6.3175 19.309 6.1175L22.5002 4.52375V25.4775Z"
          fill={color as any}
        />
        <path
          d="M16.25 8.74994H13.75V10.0637C12.325 10.3537 11.25 11.6162 11.25 13.1249C11.25 14.8474 12.6513 16.2499 14.375 16.2499H15.625C15.9688 16.2499 16.25 16.5312 16.25 16.8749C16.25 17.2187 15.9688 17.4999 15.625 17.4999H11.25V19.9999H13.75V21.2499H16.25V19.9362C17.675 19.6462 18.75 18.3824 18.75 16.8749C18.75 15.1524 17.3488 13.7499 15.625 13.7499H14.375C14.0312 13.7499 13.75 13.4687 13.75 13.1249C13.75 12.7812 14.0312 12.4999 14.375 12.4999H18.75V9.99994H16.25V8.74994Z"
          fill={color as any}
        />
      </svg>
    )}
  </IconWrapper>
);

export default Sales;
