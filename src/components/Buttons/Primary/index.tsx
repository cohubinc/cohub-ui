import React from "react";

import Color from "src/definitions/enums/Color";
import BaseButton, {
  IBaseButtonProps
} from "src/components/Buttons/Base/index";

export type TPrimaryButtonProps = IBaseButtonProps;

const Primary = ({ style = {}, ...rest }: TPrimaryButtonProps) => (
  <BaseButton backgroundColor={Color.primary} style={style} {...rest} />
);

export default Primary;
