import { ReactNode } from "react";
export interface ITabProps {
    title: string;
    active?: boolean;
    path?: string;
    onClick?: () => void;
    component?: any;
    className?: string;
    showCount?: boolean;
    count?: number;
    children?: ReactNode;
    useRedux?: boolean;
}
export default function Tab(props: ITabProps): JSX.Element;
