import React from "react";
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
    static defaultProps: Partial<ITooltipProps>;
    render(): JSX.Element;
}
