import { PureComponent } from "react";
interface IProps {
    items: Array<{
        attribute: string;
        value: any;
        format: any;
    }>;
    header?: string;
    contrast?: boolean;
    className?: string;
}
export default class AttributeList extends PureComponent<IProps> {
    formattedValue: (value: any, format: any) => any;
    render(): JSX.Element;
}
export {};
