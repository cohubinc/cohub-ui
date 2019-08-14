import React from "react";
import Tippy from "@tippy.js/react";
import { Placement } from "tippy.js";

import "./Tooltip.scss";

export interface ITooltipProps {
  children: any;
  content: any;
  arrow?: boolean;
  theme?: string;
  duration?: number;
  delay?: [number, number];
  trigger?: "manual" | "click" | "focus" | "mouseenter" | undefined;
  placement?: Placement;
  interactive?: boolean;
  className?: string;
  visible?: boolean;
}

export default class Tooltip extends React.Component<ITooltipProps> {
  static defaultProps: Partial<ITooltipProps> = {
    placement: "top",
    arrow: true,
    duration: 250,
    delay: [100, 50],
    trigger: "mouseenter",
    interactive: false,
    theme: "dark"
  };

  render() {
    const { children, content, className, ...rest } = this.props;
    return (
      <Tippy
        content={content}
        className={className}
        animateFill={false}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              boundariesElement: "window"
            }
          }
        }}
        {...rest}
      >
        <span>{children}</span>
      </Tippy>
    );
  }
}
