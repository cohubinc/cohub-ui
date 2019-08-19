import React from "react";
import styles from "./FormGroup.module.scss";

interface IProps {
  children: any;
  direction: "horizontal" | "vertical";
}

export type TFormGroupProps = IProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function FormGroup({
  children,
  direction = "horizontal",
  ...restProps
}: TFormGroupProps) {
  return (
    <div
      className={
        direction === "horizontal" ? styles.horizontal : styles.vertical
      }
      {...restProps}
    >
      {children}
    </div>
  );
}
