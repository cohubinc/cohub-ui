import React, { useState, ReactNode } from "react";
import AnimateHeight from "react-animate-height";
import { Typography } from "src";

export interface IExpanderProps {
  children: ReactNode;
  duration?: number;
  expandElement?: ReactNode;
  collapseElement?: ReactNode;
  expandElementPosition?: "above" | "below";
  labelPosition?: "left" | "center" | "right";
}

export default function Expander({
  children,
  duration = 250,
  expandElement = <Typography muted>More</Typography>,
  collapseElement = <Typography muted>Less</Typography>,
  expandElementPosition = "above",
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
      {expandElementPosition === "above" && (
        <div
          className={`flex items-center ${positionClass()} pointer w-100 mb-05`}
          onClick={() => toggleExpanded()}
        >
          {expanded && collapseElement ? collapseElement : expandElement}
        </div>
      )}

      <AnimateHeight duration={duration} height={expanded}>
        <div style={{ width: "100%" }}>{children}</div>
      </AnimateHeight>
      {expandElementPosition === "below" && (
        <div
          className={`flex items-center ${positionClass()} pointer w-100 mt-05`}
          onClick={() => toggleExpanded()}
        >
          {expanded && collapseElement ? collapseElement : expandElement}
        </div>
      )}
    </React.Fragment>
  );
}
