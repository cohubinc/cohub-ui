import React from "react";
import Divider, { IDividerProps, TMargin } from "src/components/Divider";

interface IProps extends Omit<IDividerProps, "marginSize"> {
  /**
   * Margin as rems used on Y axis of element
   * @defaultValue 1.5
   */
  marginSize?: TMargin;
}

export default function Margin(props: IProps) {
  const { marginSize = 1.5, showDividerLine = false, ...rest } = props;

  return <Divider {...rest} {...{ marginSize, showDividerLine }} />;
}
