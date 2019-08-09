import { CSSProperties, PureComponent } from "react";
import "./Modal.scss";
export interface IProps {
    open: boolean;
    onClose?: () => void;
    className?: string;
    style?: CSSProperties;
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
}
export default class Modal extends PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
