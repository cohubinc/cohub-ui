import { CSSProperties } from "react";
export declare type TMargin = 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6;
export interface IProps {
    /**
     * Margin, as rems, used on Y axis of element
     * @defaultValue 2
     */
    marginSize?: TMargin;
    /**
     * Margin as rems used on top of element
     * @defaultValue Same as `marginSize` default
     */
    marginTop?: TMargin;
    /**
     * Margin as rems used on bottom of element
     * @defaultValue Same as `marginSize` default
     */
    marginBottom?: TMargin;
    /**
     * Show or hide divider line
     * @defaultValue true
     */
    showDividerLine?: boolean;
    className?: string;
    style?: CSSProperties;
}
export default function Divider(props: IProps): JSX.Element;
