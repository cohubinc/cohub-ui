import React, { ReactNode } from "react";

export interface ISpreadProps {
  children: ReactNode[] | ReactNode;
  direction?: "horizontal" | "vertical";
  spread?: "between" | "around" | "evenly" | "start" | "end" | "center";
}

export default function Spread({
  children,
  direction = "horizontal",
  spread = "between"
}: ISpreadProps) {
  const calculateSpread = () => {
    switch (spread) {
      case "between":
        return { justifyContent: "space-between" };
      case "around":
        return { justifyContent: "space-around" };
      case "evenly":
        return { justifyContent: "space-evenly" };
      case "start":
        return { justifyContent: "flex-start" };
      case "end":
        return { justifyContent: "flex-end" };
      case "center":
        return { justifyContent: "center" };
      default:
        break;
    }
  };

  const calculateDirection = () => {
    switch (direction) {
      case "horizontal":
        return "row";
      case "vertical":
        return "column";
      default:
        return "row";
    }
  };

  const spacedChildren = () => {
    if (Array.isArray(children)) {
      return children.map((c, idx) => {
        return (
          <div key={idx} style={{ flex: 1 }}>
            {c}
          </div>
        );
      });
    } else {
      return <div style={{ flex: 1 }}>{children}</div>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: calculateDirection(),
        ...calculateSpread()
      }}
    >
      {spacedChildren()}
    </div>
  );
}
