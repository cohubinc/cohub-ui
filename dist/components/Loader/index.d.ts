import { PureComponent, CSSProperties } from "react";
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
    static defaultProps: ILoaderProps;
    render(): JSX.Element;
}
