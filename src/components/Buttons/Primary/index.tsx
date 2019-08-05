import React from "react";

import Color from "src/definitions/enums/Color";
import BaseButton, {
  IBaseButtonProps
} from "src/components/Buttons/Base/index";

const Primary = ({ style = {}, ...rest }: IBaseButtonProps) => (
  <BaseButton backgroundColor={Color.primary} style={style} {...rest} />
);

export default Primary;
