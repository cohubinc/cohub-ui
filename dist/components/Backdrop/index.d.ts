import { CSSProperties, ReactNode } from "react";
import "./Backdrop.scss";
export interface IBackdropProps {
    open: boolean;
    onClose?: () => void;
    showCloseIcon?: boolean;
    containerClass?: string;
    style?: CSSProperties;
    children?: ReactNode;
    focusTrapped: boolean;
}
export default function Backdrop(props: IBackdropProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map