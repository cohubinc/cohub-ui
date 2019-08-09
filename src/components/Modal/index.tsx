import React, { CSSProperties, PureComponent } from "react";

import Backdrop from "src/components/Backdrop";
import Segment from "src/components/Segment";

import "./Modal.scss";

export interface IProps {
  open: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
}

export default class Modal extends PureComponent<IProps> {
  static defaultProps: Partial<IProps> = {
    className: "",
    open: true,
    size: "medium"
  };

  render() {
    const { children, className, size, ...rest } = this.props;

    let modalSize;

    if (typeof size === "number") {
      modalSize = size;
    } else {
      switch (size) {
        case "xsmall":
          modalSize = 240;
          break;
        case "small":
          modalSize = 300;
          break;
        case "medium":
          modalSize = 360;
          break;
        case "large":
          modalSize = 480;
          break;
        case "xlarge":
          modalSize = 600;
          break;
        default:
          modalSize = 360;
      }
    }

    return (
      <Backdrop showCloseIcon containerClass="CohubModal" {...rest}>
        <Segment
          className={`modalBody ${className}`}
          elevation={24}
          style={{ width: `${modalSize}px` }}
        >
          {children}
        </Segment>
      </Backdrop>
    );
  }
}
