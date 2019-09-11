import { CSSProperties } from "react";
import ButtonType from "./definitions/ButtonType";
interface IOption {
    onClick: () => void;
    label: string;
}
export interface IDropdownButtonProps {
    options: IOption[];
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
    buttonType?: ButtonType;
}
export default function Dropdown(props: IDropdownButtonProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map