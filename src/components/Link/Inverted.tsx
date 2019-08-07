import React from "react";
import { TLinkProps } from "./TLinkProps";
import Base from "./Base";
import Typography from "../Typography";

export default ({ children, ...rest }: TLinkProps) => (
  <Base styled={false} {...rest}>
    <Typography inverted>{children}</Typography>
  </Base>
);
