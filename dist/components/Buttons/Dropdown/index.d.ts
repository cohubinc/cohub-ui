import { CSSProperties } from "react";
import ButtonType from "./definitions/ButtonType";
interface IOption {
    onClick: () => void;
    label: string;
}
interface IProps {
    options: IOption[];
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
    buttonType?: ButtonType;
}
export default function Dropdown(props: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map