import React from "react";

import Color from "../../../definitions/enums/Color";
import BaseButton, { IBaseButtonProps } from "../Base/index";

const Info = ({ backgroundColor, ...rest }: IBaseButtonProps) => (
  <BaseButton backgroundColor={backgroundColor || Color.blue500} {...rest} />
);

export default Info;
