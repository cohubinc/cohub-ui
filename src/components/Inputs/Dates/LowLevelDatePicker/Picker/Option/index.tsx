import React, { CSSProperties, useRef, RefObject } from "react";

import Color from "src/definitions/enums/Color";
import Buttons from "src/components/Buttons";
import Typography from "src/components/Typography";

import { transition } from "../../constants";

import styles from "../shared.module.scss";

interface IProps {
  children: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: () => void;
  nativeElRef?: RefObject<HTMLButtonElement>;
  ["data-testid"]?: string;
}

export default function Option({
  children,
  selected,
  onClick,
  onFocus,
  nativeElRef,
  ...rest
}: IProps) {
  let style: CSSProperties = {
    borderRadius: "361px",
    padding: "4px 12px",
    backgroundColor: Color.highlightGrey as any,
    transition
  };
  let color: Color | undefined;
  if (selected) {
    style = {
      ...style,
      backgroundColor: Color.green400 as any
    };
    color = Color.trueWhite;
  }

  const refObj = useRef<HTMLButtonElement>(null);

  function attachRefs(el: HTMLButtonElement) {
    (refObj.current as any) = el;
    if (nativeElRef) {
      (nativeElRef.current as any) = el;
    }
  }

  return (
    <Buttons.Blank
      className={`${styles.focusable} ${
        selected ? styles.selected : ""
      } w-100 flex justify-center items-center`}
      style={style}
      onClick={e => {
        refObj.current && refObj.current.blur();
        onClick(e);
      }}
      onFocus={onFocus}
      nativeElRef={attachRefs}
      data-testid={rest["data-testid"]}
    >
      <Typography.Small color={color}>{children}</Typography.Small>
    </Buttons.Blank>
  );
}
