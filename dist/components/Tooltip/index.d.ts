import React from "react";
import { Placement } from "tippy.js";
import "./Tooltip.scss";
interface IProps {
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
export default class Tooltip extends React.Component<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map