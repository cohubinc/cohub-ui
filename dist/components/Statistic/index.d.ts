import { PureComponent } from "react";
export interface IStatisticProps {
    size?: "tiny" | "small" | "regular" | "large" | "xlarge" | "huge";
    /**
     * The formatting that should be applied to the Statistics value
     */
    format: "money" | "number" | "percentage" | "text";
    label: string;
    value: number | string;
}
export default class Statistic extends PureComponent<IStatisticProps> {
    static defaultProps: {
        size: string;
    };
    formattedValue: (value: any, format: any) => any;
    render(): JSX.Element;
}
