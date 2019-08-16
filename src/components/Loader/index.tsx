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
  size: number;
}

export default function Loader(props: ILoaderProps) {
  const { fullScreen, show = true, asOverlay, style, size = 30 } = props;

  if (fullScreen) {
    return (
      <Backdrop style={style} open={show} focusTrapped={false}>
        <ShrinkGrowLoader size={size} />
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
          <ShrinkGrowLoader size={size} />
        </div>
      </Fade>
    );
  }

  return (
    <Fade show={show}>
      <ShrinkGrowLoader size={size} />
    </Fade>
  );
}

const ShrinkGrowLoader = ({ size }: { size: number }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="dot1"
        style={{ borderRadius: "50%", width: size, height: size }}
      />
      <div
        className="dot2"
        style={{ borderRadius: "50%", width: size, height: size }}
      />
    </div>
  );
};

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
