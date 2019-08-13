import { MouseEventHandler, Component } from "react";
import HtmlElementProps from "../../definitions/types/HtmlElementProps";
import AddChipInput from "./AddChipInput";
import "./Chip.scss";
interface IChipProps {
    label?: string;
    onDelete?: MouseEventHandler<HTMLElement>;
    checked?: boolean;
    dark?: boolean;
    backgroundColor?: string;
    size?: number;
}
export declare type TChipProps = IChipProps & Pick<HtmlElementProps, "onClick" | "className" | "style">;
export default class Chip extends Component<TChipProps> {
    static Add: typeof AddChipInput;
    static defaultProps: Partial<TChipProps>;
    render(): JSX.Element;
}
export {};
