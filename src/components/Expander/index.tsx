import React, { useState, ReactNode } from "react";
import AnimateHeight from "react-animate-height";

export interface IExpanderProps {
  children: ReactNode;
  duration?: number;
  expandElement: ReactNode;
  labelPosition?: "left" | "center" | "right";
}

export default function Expander({
  children,
  duration = 250,
  expandElement,
  labelPosition = "left"
}: IExpanderProps) {
  type THeight = 0 | "auto";

  const [expanded, setExpanded] = useState<THeight>(0);

  const toggleExpanded = () => {
    expanded ? setExpanded(0) : setExpanded("auto");
  };

  const positionClass = () => {
    if (labelPosition === "left") {
      return "justify-start";
    } else if (labelPosition === "center") {
      return "justify-center";
    } else if (labelPosition === "right") {
      return "justify-end";
    }
  };

  return (
    <React.Fragment>
      <div
        className={`flex items-center ${positionClass()} pointer w-100 mb-1`}
        onClick={() => toggleExpanded()}
      >
        {expandElement}
      </div>
      <AnimateHeight duration={duration} height={expanded}>
        <div style={{ width: "100%" }}>{children}</div>
      </AnimateHeight>
    </React.Fragment>
  );
}
