import { CSSProperties } from "react";
import Color from "../../../definitions/enums/Color";
export interface ISplitButtonProps {
    labels: string[];
    selectedIndex?: number;
    onChange: (index: number) => void;
    segmentStyle?: CSSProperties;
    color?: Color;
    style?: CSSProperties;
    className?: string;
}
export default function SplitButton(props: ISplitButtonProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map