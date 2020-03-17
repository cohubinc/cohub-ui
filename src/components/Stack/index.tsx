import React, { ReactNode } from "react";

export interface IStackProps {
  children: ReactNode[] | ReactNode;
  space?: number;
  alignment?: "center" | "left" | "right";
}

export default function Stack({
  space = 1,
  children,
  alignment = "left"
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
    if (Array.isArray(children)) {
      return children.map((c, idx) => {
        return (
          <div key={idx} style={{ marginBottom: `${space}rem` }}>
            {c}
          </div>
        );
      });
    } else {
      return <div style={{ marginBottom: `${space}rem` }}>{children}</div>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...calculateAlignment()
      }}
    >
      {spacedChildren()}
    </div>
  );
}
