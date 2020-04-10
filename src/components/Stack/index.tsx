import React, { ReactNode, ReactElement } from "react";
import { CSSProperties } from "styled-components";

export interface IStackProps {
  children: ReactElement<any> | ReactElement<any>[];
  space?: number;
  alignment?: "center" | "left" | "right";
  fullWidth?: boolean;
  childrenWidth?: CSSProperties["width"];
}

export default function Stack({
  space = 1,
  children,
  alignment = "left",
  fullWidth = false
}: IStackProps) {
  const calculateAlignment = () => {
    switch (alignment) {
      case "center":
        return { alignItems: "center" };
      case "left":
        return { alignItems: "flex-start" };
      case "right":
        return { alignItems: "flex-end" };
      default:
        break;
    }
  };

  const spacedChildren = () => {
    return React.Children.map(children, (c, idx) => {
      const newProps = {
        ...c.props,
        style: { ...c.props?.style, marginBottom: `${space}rem` }
      };
      return React.cloneElement(c, newProps);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: fullWidth ? "100%" : "initial",
        ...calculateAlignment()
      }}
    >
      {spacedChildren()}
    </div>
  );
}
