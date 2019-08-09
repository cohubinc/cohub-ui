import { PureComponent } from "react";
interface IProps {
    size?: "tiny" | "small" | "regular" | "large" | "xlarge" | "huge";
    /**
     * The formatting that should be applied to the Statistics value
     */
    format: "money" | "number" | "percentage" | "text";
    label: string;
    value: number | string;
}
export default class Statistic extends PureComponent<IProps> {
    static defaultProps: {
        size: string;
    };
    formattedValue: (value: any, format: any) => any;
    render(): JSX.Element;
}
export {};
