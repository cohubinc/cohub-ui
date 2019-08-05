import React from "react";

// interface IProps extends Omit<IDividerProps, "marginSize"> {
//   /**
//    * Margin as rems used on Y axis of element
//    * @defaultValue 1.5
//    */
//   marginSize?: TMargin;
// }

export default function Margin(props: any) {
  const { marginSize = 1.5, showDividerLine = false, ...rest } = props;

  return <span />;
}
