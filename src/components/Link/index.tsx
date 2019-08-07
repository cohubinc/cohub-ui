import React from "react";
import { TLinkProps } from "./TLinkProps";
import Base from "./Base";
import Muted from "./Muted";

import "./Link.scss";

class Link extends React.Component<TLinkProps> {
  static Muted = Muted;

  static defaultProps: Partial<TLinkProps> = {
    styled: true,
    animated: true
  };

  render() {
    return <Base {...this.props} />;
  }
}

export default Link;
