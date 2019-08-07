import { MouseEventHandler, Component } from "react";
import HTMLElementProps from "../../definitions/types/HtmlElementProps";
import AddChipInput from "./AddChipInput";
import "./Chip.scss";
interface IProps {
    label?: string;
    onDelete?: MouseEventHandler<HTMLElement>;
    checked?: boolean;
    dark?: boolean;
    backgroundColor?: string;
    size?: number;
}
export declare type TProps = IProps & Pick<HTMLElementProps, "onClick" | "className" | "style">;
export default class Chip extends Component<TProps> {
    static Add: typeof AddChipInput;
    static defaultProps: Partial<TProps>;
    render(): JSX.Element;
}
export {};
