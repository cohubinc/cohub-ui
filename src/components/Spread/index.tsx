import React, { ReactNode, ReactElement, CSSProperties } from "react";

export interface ISpreadProps {
  children: ReactElement<any> | ReactElement<any>[];
  direction?: "horizontal" | "vertical";
  spread?: "between" | "around" | "evenly" | "start" | "end" | "center";
  itemAlignment?: "start" | "end" | "center" | "baseline" | "stretch";
  flexChild?: boolean;
}

export default function Spread({
  children,
  direction = "horizontal",
  spread = "between",
  itemAlignment = "start",
  flexChild = true
}: ISpreadProps) {
  const calculateSpread = () => {
    switch (spread) {
      case "between":
        return { justifyContent: "space-between" };
      case "around":
        return { justifyContent: "space-around" };
      case "evenly":
        return { justifyContent: "space-evenly", color: "green" };
      case "start":
        return { justifyContent: "flex-start" };
      case "end":
        return { justifyContent: "flex-end" };
      case "center":
        return { justifyContent: "center" };
    }
  };

  const calculateItemAlignment = () => {
    switch (itemAlignment) {
      case "center":
        return { alignItems: "center" };
      case "baseline":
        return { alignItems: "baseline" };
      case "start":
        return { alignItems: "flex-start" };
      case "end":
        return { alignItems: "flex-end" };
      case "stretch":
        return { alignItems: "stretch" };
    }
  };

  const calculateDirection = (): CSSProperties => {
    switch (direction) {
      case "horizontal":
        return { flexDirection: "row", flex: 1 };
      case "vertical":
        const result: CSSProperties = {
          flexDirection: "column",
          flex: 1
        };
        if (flexChild) {
          result.alignSelf = "stretch";
        } else {
          result.height = "100%";
        }
        return result;
    }
  };

  return (
    <div
      className="spread-container"
      style={{
        display: "flex",
        ...calculateDirection(),
        ...calculateSpread(),
        ...calculateItemAlignment()
      }}
    >
      {children}
    </div>
  );
}
