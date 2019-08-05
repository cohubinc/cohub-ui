import { CSSProperties, Component } from "react";
import Color from "src/definitions/enums/Color";
interface IProps {
    labels: string[];
    selectedIndex?: number;
    onChange: (index: number) => void;
    segmentStyle?: CSSProperties;
    color?: Color;
    style?: CSSProperties;
    className?: string;
}
export default class Split extends Component<IProps> {
    static Primary: ({ color, ...rest }: IProps) => JSX.Element;
    render(): JSX.Element;
}
export {};
