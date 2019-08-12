import { CSSProperties } from "react";
import Color from "../../../definitions/enums/Color";
interface IProps {
    labels: string[];
    selectedIndex?: number;
    onChange: (index: number) => void;
    segmentStyle?: CSSProperties;
    color?: Color;
    style?: CSSProperties;
    className?: string;
}
export default function SplitButton(props: IProps): JSX.Element;
export {};
