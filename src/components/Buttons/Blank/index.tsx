import React, { LegacyRef } from "react";
import pick from "lodash/pick";

import Typography from "src/components/Typography";
import styles from "./Blank.module.scss";

// When you want to wrap another element in a button but don't want any button styles from the browser.
// If it's clickable it should probably be a button or a link
export type TBlankButtonProps = {
  nativeElRef?: LegacyRef<HTMLButtonElement>;
} & JSX.IntrinsicElements["button"];

const Blank = ({
  className = "",
  children,
  style,
  nativeElRef,
  ...rest
}: TBlankButtonProps) => (
  <button
    style={style}
    className={`${styles.ButtonBlank} ${className}`}
    ref={nativeElRef}
    {...rest}
  >
    <Typography
      style={style && { color: style.color, fontSize: style.fontSize as any }}
    >
      {children}
    </Typography>
  </button>
);

export default Blank;
