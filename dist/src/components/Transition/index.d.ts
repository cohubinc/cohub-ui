import { CSSProperties } from "react";
interface IProps {
    show: boolean;
    entered?: CSSProperties;
    start?: CSSProperties;
    entering?: CSSProperties;
    exiting?: CSSProperties;
    exited?: CSSProperties;
    transition?: string;
    transitionProperty?: string;
    duration?: number;
    /**
     * Weather or not the animation should play on the initial render
     */
    appear?: boolean;
    children: any;
}
declare const Transition: ({ show, start, transition, transitionProperty, entering, entered, exiting, exited, duration, appear, children }: IProps) => JSX.Element;
export default Transition;
interface ITransProps {
    show?: boolean | undefined;
    children: JSX.Element[] | JSX.Element | any;
    duration?: number;
    start?: CSSProperties;
    appear?: boolean;
    transitionProperty?: string;
}
export declare const Fade: ({ show, children, start, duration, appear, transitionProperty }: ITransProps) => JSX.Element;
export declare const Expand: ({ show, children, duration, appear, width }: ITransProps & {
    width?: string | number | undefined;
}) => JSX.Element;
export declare const Scale: ({ show, children, duration, appear }: ITransProps & {
    width?: string | number | undefined;
}) => JSX.Element;
export declare const Grow: ({ show, children, height, duration, appear }: ITransProps & {
    height?: string | number | undefined;
}) => JSX.Element;
interface IToggleProps {
    size?: string | number;
    showFirstChild: boolean;
    children: any;
    height?: string | number;
    width?: string | number;
    appear?: boolean;
}
export declare const Toggle: ({ size, showFirstChild, height, width, appear, children }: IToggleProps) => JSX.Element;
