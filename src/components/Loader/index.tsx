import React, { PureComponent, CSSProperties } from "react";

import { size, marginHorizontal } from "src/helpers/style-utils";
import Color from "src/definitions/enums/Color";
import Backdrop from "src/components/Backdrop";
import { Fade } from "src/components/Transition";

import "./loader.scss";

export interface ILoaderProps {
  /**
   * The loader can take up the whole screen inside of the Backdrop overlay
   */
  fullScreen?: boolean;

  asOverlay?: boolean;
  /**
   * To show or not to show
   */
  show: boolean;

  /**
   * Styles that will be applied to the root element
   */
  style?: CSSProperties;
}

export default class Loader extends PureComponent<ILoaderProps> {
  static defaultProps: ILoaderProps = {
    show: true
  };

  render() {
    const { fullScreen, show, asOverlay, style } = this.props;

    if (fullScreen) {
      return (
        <Backdrop style={style} open={show} focusTrapped={false}>
          <HopDropsLoader />
        </Backdrop>
      );
    }

    if (asOverlay) {
      return (
        <Fade show={show}>
          <div
            className="absolute flex justify-center items-center w-100 h-100"
            style={{ background: Color.darkOverlay as any, ...style }}
          >
            <HopDropsLoader />
          </div>
        </Fade>
      );
    }

    return (
      <Fade show={show}>
        <HopDropsLoader style={style} />
      </Fade>
    );
  }
}

const HopDropsLoader = ({ style }: { style?: CSSProperties }) => (
  <div
    style={{ height: "2em", width: "6em", ...style }}
    className="flex justify-center items-center"
  >
    <GreenDot />
    <GreenDot style={{ animationDelay: "0.1s", ...marginHorizontal(5) }} />
    <GreenDot style={{ animationDelay: "0.2s" }} />
  </div>
);

const GreenDot = ({ style = {} }) => (
  <span
    style={{
      ...size(12),
      backgroundColor: Color.primary as any,
      borderRadius: "50%",
      animation: "hop-lock-and-drop 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite",
      ...style
    }}
  />
);
