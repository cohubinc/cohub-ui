import React, { ReactNode } from "react";
import styles from "./FormGroup.module.scss";

interface IProps {
  /**
   * Child elements of the FormGroup
   */
  children: ReactNode;
  /**
   * Direction the FormGroup should flow represented as a string. Can be "horizontal" or "vertical"
   * @defaultValue "horizontal"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Additional classes can be applied to this component
   * @defaultValue ""
   */
  className?: string;
  /**
   * Width represented as a percentage
   * @defaultValue 100
   */
  width?: number;
}

export type TFormGroupProps = IProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function FormGroup({
  children,
  direction = "horizontal",
  className = "",
  width = 100,
  ...restProps
}: TFormGroupProps) {
  return (
    <div
      className={`${
        direction === "horizontal" ? styles.horizontal : styles.vertical
      } ${className}`}
      style={{ width: `${width}%` }}
      {...restProps}
    >
      {children}
    </div>
  );
}
