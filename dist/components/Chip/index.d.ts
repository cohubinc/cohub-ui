import { MouseEventHandler, Component } from "react";
import HtmlElementProps from "../../definitions/types/HtmlElementProps";
import AddChipInput from "./AddChipInput";
import "./Chip.scss";
import AvatarChip from "./AvatarChip";
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
    static Avatar: typeof AvatarChip;
    static defaultProps: Partial<TChipProps>;
    render(): JSX.Element;
}
export {};
