import React, { CSSProperties, PureComponent } from "react";

import Backdrop from "src/components/Backdrop";
import Segment from "src/components/Segment";

import "./Modal.scss";
import Typography from "../Typography";
import Divider from "../Divider";

export interface IModalProps {
  open: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
  title?: string;
}

export default class Modal extends PureComponent<IModalProps> {
  static defaultProps: Partial<IModalProps> = {
    className: "",
    open: true,
    size: "medium"
  };

  render() {
    const { children, className, size, title, ...rest } = this.props;

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
          {title && (
            <React.Fragment>
              <Typography.HeadingTiny>{title}</Typography.HeadingTiny>
              <Divider marginSize={1} />
            </React.Fragment>
          )}
          {children}
        </Segment>
      </Backdrop>
    );
  }
}
