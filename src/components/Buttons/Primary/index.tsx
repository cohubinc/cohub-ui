import React from "react";

import Color from "src/definitions/enums/Color";
import BaseButton from "src/components/Buttons/Base/index";
import { TPrimaryButtonProps } from "./TPrimaryButtonProps";

const Primary = ({ style = {}, ...rest }: TPrimaryButtonProps) => (
  <BaseButton backgroundColor={Color.primary} style={style} {...rest} />
);

export default Primary;
