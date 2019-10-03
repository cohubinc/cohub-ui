import React, { CSSProperties, ReactNode } from "react";

export interface IOpacifierProps {
  /**
   * Where the blur effect will be positioned
   * @defaultValue "bottom"
   */
  placement?: "bottom" | "top";
  /**
   * Children that should be rendered beneath the blur
   * @defaultValue 2
   */
  children?: ReactNode;
  /**
   * The height of the blur
   * @defaultValue 2
   */
  blurHeight?: number;
  /**
   * The height of the containing element where you'll have scrollable content
   * @defaultValue 2
   */
  containerHeight?: any;
}

export default function Opacifier({
  placement = "bottom",
  children,
  blurHeight = 25,
  containerHeight
}: IOpacifierProps) {
  const baseStyle: CSSProperties = {
    position: "sticky",
    width: "100%",
    height: `${blurHeight}%`,
    [placement]: 0,
    background: `linear-gradient(${
      placement === "top" ? "180deg" : "0deg"
    }, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%)`
  };

  return (
    <div
      style={{
        position: "relative",
        height: containerHeight ? containerHeight : "initial",
        overflowY: "scroll"
      }}
    >
      {placement === "top" && <div style={baseStyle} />}
      {children}
      {placement === "bottom" && <div style={baseStyle} />}
    </div>
  );
}
