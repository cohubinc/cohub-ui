import React, { CSSProperties, ReactNode } from "react";

import Backdrop from "src/components/Backdrop";
import Segment from "src/components/Segment";

import Typography from "../Typography";
import Divider from "../Divider";

import "./Modal.scss";
import useMediaQueries from "src/hooks/useMediaQueries";

export interface IModalProps {
  open: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
  title?: string;
  children: ReactNode;
  focusTrapped?: boolean;
}

export default function Modal(props: IModalProps) {
  const {
    children = "",
    className,
    size = "medium",
    title,
    focusTrapped = true,
    ...rest
  } = props;

  const { isMobile } = useMediaQueries();

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
    <Backdrop
      showCloseIcon={!isMobile}
      focusTrapped={focusTrapped}
      containerClass="CohubModal"
      {...rest}
    >
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
