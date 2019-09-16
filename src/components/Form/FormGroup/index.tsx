import React from "react";
import styles from "./FormGroup.module.scss";

interface IProps {
  children: any;
  direction?: "horizontal" | "vertical";
  className?: string;
}

export type TFormGroupProps = IProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function FormGroup({
  children,
  direction = "horizontal",
  className = "",
  ...restProps
}: TFormGroupProps) {
  return (
    <div
      className={`${
        direction === "horizontal" ? styles.horizontal : styles.vertical
      } ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
}
