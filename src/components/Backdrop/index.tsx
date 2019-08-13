import React, { PureComponent, CSSProperties } from "react";
import ReactResponsiveModal from "react-responsive-modal";

import Color from "src/definitions/enums/Color";

import "./Backdrop.scss";

export interface IBackdropProps {
  open: boolean;
  onClose?: () => void;
  showCloseIcon?: boolean;
  containerClass?: string;
  style?: CSSProperties;
}

export type TBackdropProps = IBackdropProps & { focusTrapped: boolean };

export default class Backdrop extends PureComponent<TBackdropProps> {
  static defaultProps: Partial<TBackdropProps> = {
    showCloseIcon: false,
    containerClass: "",
    onClose: () => undefined,
    focusTrapped: true,
    open: true
  };

  appRoot: HTMLElement | null = document.getElementById("root");

  componentDidMount() {
    this.setBlurState();
  }

  componentDidUpdate() {
    this.setBlurState();
  }

  componentWillUnmount() {
    this.removeBlurClass();
  }

  render() {
    const {
      children,
      onClose,
      showCloseIcon,
      containerClass = "",
      style,
      ...rest
    } = this.props;

    return (
      <ReactResponsiveModal
        closeOnEsc
        closeOnOverlayClick
        {...rest}
        classNames={{
          overlay: `CohubBackdrop ${containerClass}`,
          modal: "modal",
          closeButton: "closeButton"
        }}
        showCloseIcon={showCloseIcon}
        onClose={onClose!}
        onOverlayClick={onClose}
        onEscKeyDown={onClose}
        closeIconSvgPath={CloseIcon}
        styles={{ overlay: style }}
      >
        {children}
      </ReactResponsiveModal>
    );
  }

  private setBlurState = () => {
    const { open } = this.props;

    open ? this.addBlurClass() : this.removeBlurClass();
  };
  private addBlurClass = () => {
    this.appRoot && this.appRoot.classList.add("blurred");
  };
  private removeBlurClass = () => {
    this.appRoot && this.appRoot.classList.remove("blurred");
  };
}

const iconSize = 44;
const CloseIcon = (
  <svg
    width={iconSize}
    height={iconSize}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.974332L11.025 0L6.00034 5.02532L0.975021 0L0 0.974332L5.02532 5.99966L0 11.025L0.975021 11.9993L6.00034 6.97399L11.025 11.9993L12 11.025L6.97468 5.99966L12 0.974332Z"
      fill={Color.trueWhite as any}
    />
  </svg>
);
