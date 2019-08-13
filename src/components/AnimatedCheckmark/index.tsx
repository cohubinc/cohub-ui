import React from "react";

import "./AnimatedCheckmark.scss";

export interface IAnimatedCheckmarkProps {
  size?: string | number;
}
const AnimatedCheckmark = ({ size = "100%" }: IAnimatedCheckmarkProps) => (
  <div
    style={{
      height: size,
      width: size,
      borderRadius: "50%"
    }}
  >
    <svg
      className="AnimatedCheckmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="checkmark__circle"
        cx="52"
        cy="52"
        r="1000"
        fill="none"
      />
      <path
        className="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  </div>
);

export default AnimatedCheckmark;
