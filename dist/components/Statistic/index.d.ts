/// <reference types="react" />
import Color from "../../definitions/enums/Color";
declare type Value = number | string | undefined | null;
export interface IStatisticProps {
    size?: "small" | "regular" | "large" | "xlarge" | "huge";
    /**
     * The formatting that should be applied to the Statistics value
     */
    format: "money" | "number" | "percentage" | "text";
    label: string;
    value: Value;
    color?: Color;
}
export default function Statistic({ size, format, label, value, color }: IStatisticProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map