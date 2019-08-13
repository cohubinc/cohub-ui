import { CSSProperties, PureComponent } from "react";
import "./Modal.scss";
export interface IModalProps {
    open: boolean;
    onClose?: () => void;
    className?: string;
    style?: CSSProperties;
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
}
export default class Modal extends PureComponent<IModalProps> {
    static defaultProps: Partial<IModalProps>;
    render(): JSX.Element;
}
