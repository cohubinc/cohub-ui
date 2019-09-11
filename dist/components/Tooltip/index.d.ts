import { ReactNode } from "react";
import { Options } from "tippy.js";
import "./Tooltip.scss";
export interface ITooltipProps {
    children: any;
    content: ReactNode | ((ref: Element) => Element | string);
    className?: string;
    visible?: boolean;
}
export declare type TTooltipProps = ITooltipProps & Omit<Options, "content">;
export default function Tooltip({ children, className, placement, arrow, duration, delay, trigger, theme, interactive, content, visible, ...rest }: TTooltipProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map