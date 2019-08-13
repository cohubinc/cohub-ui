import { PureComponent, CSSProperties } from "react";
import "./Backdrop.scss";
export interface IBackdropProps {
    open: boolean;
    onClose?: () => void;
    showCloseIcon?: boolean;
    containerClass?: string;
    style?: CSSProperties;
}
export declare type TBackdropProps = IBackdropProps & {
    focusTrapped: boolean;
};
export default class Backdrop extends PureComponent<TBackdropProps> {
    static defaultProps: Partial<TBackdropProps>;
    appRoot: HTMLElement | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private setBlurState;
    private addBlurClass;
    private removeBlurClass;
}
