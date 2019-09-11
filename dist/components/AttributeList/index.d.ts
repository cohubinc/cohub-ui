/// <reference types="react" />
export interface IAttributeListProps {
    items: Array<{
        attribute: string;
        value: any;
        format: any;
    }>;
    header?: string;
    contrast?: boolean;
    className?: string;
    maxVisible?: number;
    expandable?: boolean;
}
export default function AttributeList({ header, items, contrast, className, maxVisible, expandable }: IAttributeListProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map