import { PureComponent } from "react";
export interface IFormatMoneyProps {
    value: number;
    /**
     * Use to extend decimal precision
     */
    extendedPrecision?: boolean;
    "data-qa"?: string;
}
declare class FormatMoney extends PureComponent<IFormatMoneyProps> {
    static defaultProps: Partial<IFormatMoneyProps>;
    render(): JSX.Element;
}
export default FormatMoney;
