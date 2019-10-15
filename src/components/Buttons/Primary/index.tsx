import React, { CSSProperties } from "react";

import Color from "src/definitions/enums/Color";
import BaseButton from "src/components/Buttons/Base/index";
import { TPrimaryButtonProps } from "./TPrimaryButtonProps";

function Primary<T>({ style = {}, ...rest }: TPrimaryButtonProps<T>) {
  return (
    <BaseButton
      backgroundColor={Color.primary}
      style={style as CSSProperties}
      {...rest}
    />
  );
}
export default Primary;
