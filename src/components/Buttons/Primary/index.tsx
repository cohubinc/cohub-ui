import React from "react";

import Color from "../../../definitions/enums/Color";
import BaseButton, { IBaseButtonProps } from "../../Buttons/Base/index";

const Primary = ({ style = {}, ...rest }: IBaseButtonProps) => (
  <BaseButton backgroundColor={Color.primary} style={style} {...rest} />
);

export default Primary;
