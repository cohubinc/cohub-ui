import React, { ReactNode, ReactElement, CSSProperties } from "react";

export interface IStackProps {
  children: ReactNode | ReactNode[];
  space?: number;
  alignment?: "center" | "left" | "right";
  fullWidth?: boolean;
  childrenWidth?: CSSProperties["width"];
  style?: CSSProperties;
}

export default function Stack({
  space = 1,
  children,
  alignment = "left",
  fullWidth = false,
  childrenWidth,
  style
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
    const kids = React.Children.map(children, (c, idx) => {
      if (c === false || c === null) {
        return;
      }

      if (typeof c === "function" || typeof c === "object") {
        const child = c as ReactElement<any>;
        const newProps = {
          ...child.props,
          key: idx,
          style: {
            ...child.props?.style,
            marginBottom: `${space}rem`,
            width: childrenWidth || child.props?.style?.width
          }
        };
        return React.cloneElement(child, newProps);
      }

      return (
        <div style={{ marginBottom: `${space}rem`, width: childrenWidth }}>
          {c}
        </div>
      );
    });

    return kids.filter(Boolean);
  };

  return (
    <div
      style={{
        ...style,
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
