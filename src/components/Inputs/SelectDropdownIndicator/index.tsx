import React from "react";

import Color from "src/definitions/enums/Color";
import Icon from "src/components/Icon";
import { IndicatorProps } from "react-select/src/components/indicators";

type TProps<T> = React.PropsWithChildren<IndicatorProps<T>>;
export default function DropdownIndicator<T>(props: TProps<T>) {
  return (
    <Icon.CaretDown {...props} color={Color.black} style={{ marginLeft: -6 }} />
  );
}

export const indicatorsContainer = (styling: any) => ({
  ...styling,
  marginRight: 11
});
