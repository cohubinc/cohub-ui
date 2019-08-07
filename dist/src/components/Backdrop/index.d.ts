import { PureComponent, CSSProperties } from "react";
import "./Backdrop.scss";
export interface IProps {
    open: boolean;
    onClose?: () => void;
    showCloseIcon?: boolean;
    containerClass?: string;
    style?: CSSProperties;
}
declare type TProps = IProps & {
    focusTrapped: boolean;
};
export default class Backdrop extends PureComponent<TProps> {
    static defaultProps: Partial<TProps>;
    appRoot: HTMLElement | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private setBlurState;
    private addBlurClass;
    private removeBlurClass;
}
export {};
