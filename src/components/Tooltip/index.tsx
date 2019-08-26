import React, { ReactNode } from "react";
import Tippy from "@tippy.js/react";
import { Placement, Options } from "tippy.js";

import "./Tooltip.scss";

export interface ITooltipProps {
  children: any;
  content: ReactNode | ((ref: Element) => Element | string);
  className?: string;
  visible?: boolean;
}

export type TTooltipProps = ITooltipProps & Omit<Options, "content">;

export default function Tooltip({
  children,
  className,
  placement = "top",
  arrow = true,
  duration = 250,
  delay = [100, 50],
  trigger = "mouseenter",
  theme = "dark",
  interactive = false,
  content,
  visible,
  ...rest
}: TTooltipProps) {
  return (
    <Tippy
      content={content as any}
      className={className}
      animateFill={false}
      arrow={arrow}
      duration={duration}
      delay={delay}
      trigger={trigger}
      theme={theme}
      interactive={interactive}
      visible={visible}
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
