import React, { CSSProperties } from "react";

export type TMargin = 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;
export interface IDividerProps {
  /**
   * Margin, as rems, used on Y axis of element
   * @defaultValue 2
   */
  marginSize?: TMargin;
  /**
   * Margin as rems used on top of element
   * @defaultValue Same as `marginSize` default
   */
  marginTop?: TMargin;
  /**
   * Margin as rems used on bottom of element
   * @defaultValue Same as `marginSize` default
   */
  marginBottom?: TMargin;
  /**
   * Show or hide divider line
   * @defaultValue true
   */
  showDividerLine?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function Divider(props: IDividerProps) {
  const {
    marginSize = 2,
    marginTop = marginSize,
    marginBottom = marginSize,
    showDividerLine = true,
    className,
    style
  } = props;

  return (
    <div
      className={className}
      style={{
        borderTop: showDividerLine ? "1px solid var(--border)" : undefined,
        marginTop: `${marginTop || 0}rem`,
        marginBottom: `${marginBottom || 0}rem`,
        width: "100%",
        ...style
      }}
    />
  );
}
