import React from "react";

import Color from "../../../definitions/enums/Color";
import BaseButton, { IBaseButtonProps } from "../Base/index";

export type TProps = Omit<IBaseButtonProps, "error" | "success">;

export const Cancel = ({ backgroundColor, ...rest }: TProps) => (
  <BaseButton backgroundColor={backgroundColor || Color.red500} {...rest} />
);

export default Cancel;
