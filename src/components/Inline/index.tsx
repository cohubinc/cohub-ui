import React, { ReactNode } from "react";

export interface IInlineProps {
  children: ReactNode[] | ReactNode;
  space?: number;
  alignment?: "center" | "left" | "right";
  itemsCentered?: boolean;
}

export default function Inline({
  space = 1,
  children,
  alignment = "left",
  itemsCentered = true
}: IInlineProps) {
  const calculateMargin = () => {
    switch (alignment) {
      case "center":
        return {
          marginLeft: `${space / 2}rem`,
          marginRight: `${space / 2}rem`
        };
      case "left":
        return {
          marginRight: `${space}rem`
        };
      case "right":
        return {
          marginLeft: `${space}rem`
        };
      default:
        return {
          marginRight: `${space}rem`
        };
    }
  };

  const calculateAlignment = () => {
    switch (alignment) {
      case "center":
        return { justifyContent: "center" };
      case "left":
        return { justifyContent: "flex-start" };
      case "right":
        return { justifyContent: "flex-end" };
      default:
        break;
    }
  };

  const spacedChildren = () => {
    if (Array.isArray(children)) {
      return children.map((c, idx) => {
        return (
          <span key={idx} style={calculateMargin()}>
            {c}
          </span>
        );
      });
    } else {
      return <span style={calculateMargin()}>{children}</span>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: itemsCentered ? "center" : "stretch",
        ...calculateAlignment()
      }}
    >
      {spacedChildren()}
    </div>
  );
}