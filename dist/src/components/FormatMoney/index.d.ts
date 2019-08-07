import { PureComponent } from "react";
interface IProps {
    value: number;
    /**
     * Use to extend decimal precision
     */
    extendedPrecision?: boolean;
    "data-qa"?: string;
}
declare class FormatMoney extends PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export default FormatMoney;
