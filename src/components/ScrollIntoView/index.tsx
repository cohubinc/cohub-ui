import React, { Component, useRef, useEffect } from "react";
import usePrevious from "src/hooks/usePrevious";

export interface IScrollIntoViewProps {
  children: JSX.Element[] | JSX.Element;
  traceProp?: any;
  scroll?: boolean;
  style?: any;
  className?: string;
  scrollOpts?: ScrollIntoViewOptions;
}

export default function ScrollIntoView(props: IScrollIntoViewProps) {
  const {
    style,
    className = "",
    children,
    scroll = true,
    scrollOpts = {},
    traceProp
  } = props;

  const selfRef = useRef<HTMLDivElement>(null);

  function scrollIntoView() {
    const self = selfRef.current;
    if (!scroll || !self) return;

    setTimeout(
      () => self.scrollIntoView({ ...defaultScrollOpts, ...scrollOpts }),
      100
    );
  }

  useEffect(() => {
    scrollIntoView();
  }, [traceProp, scroll]);

  return (
    <div ref={selfRef} style={style} className={`${className} w-100`}>
      {children}
    </div>
  );
}

const defaultScrollOpts: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center"
};
