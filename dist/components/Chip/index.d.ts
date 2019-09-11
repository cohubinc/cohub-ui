import { MouseEventHandler, Component } from "react";
import Color from "../../definitions/enums/Color";
import HtmlElementProps from "../../definitions/types/HtmlElementProps";
import AddChipInput from "./AddChipInput";
import AvatarChip from "./AvatarChip";
import "./Chip.scss";
interface IChipProps {
    label?: string;
    onDelete?: MouseEventHandler<HTMLElement>;
    checked?: boolean;
    dark?: boolean;
    backgroundColor?: Color;
    size?: number;
    active?: boolean;
}
export declare type TChipProps = IChipProps & Pick<HtmlElementProps, "onClick" | "className" | "style">;
export default class Chip extends Component<TChipProps> {
    static Add: typeof AddChipInput;
    static Avatar: typeof AvatarChip;
    static defaultProps: Partial<TChipProps>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map