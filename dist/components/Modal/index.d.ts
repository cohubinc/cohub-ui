import { CSSProperties, ReactNode } from "react";
import "./Modal.scss";
export interface IModalProps {
    open: boolean;
    onClose?: () => void;
    className?: string;
    style?: CSSProperties;
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
    title?: string;
    children: ReactNode;
    focusTrapped?: boolean;
}
export default function Modal(props: IModalProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map