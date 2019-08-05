import { CSSProperties } from "react";
import "./Dropdown.scss";
interface IOption {
    onClick: () => void;
    label: string;
}
interface IProps {
    options: IOption[];
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
    buttonType?: "Primary" | "Secondary" | "Info" | "Cancel";
}
export default function Dropdown(props: IProps): JSX.Element;
export {};
