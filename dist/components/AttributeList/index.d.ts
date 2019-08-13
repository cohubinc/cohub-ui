import { PureComponent } from "react";
export interface IAttributeListProps {
    items: Array<{
        attribute: string;
        value: any;
        format: any;
    }>;
    header?: string;
    contrast?: boolean;
    className?: string;
}
export default class AttributeList extends PureComponent<IAttributeListProps> {
    formattedValue: (value: any, format: any) => any;
    render(): JSX.Element;
}
