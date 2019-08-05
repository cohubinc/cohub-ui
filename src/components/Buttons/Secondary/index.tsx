import React from "react";

import Color from "src/definitions/enums/Color";
import BaseButton, {
  IBaseButtonProps
} from "src/components/Buttons/Base/index";

const Secondary = ({ style = {}, ...rest }: IBaseButtonProps) => (
  <BaseButton
    backgroundColor={Color.white500}
    style={{ color: Color.grey800 as any, ...style }}
    {...rest}
  />
);

export default Secondary;
