import { ReactNode } from "react";
interface IProps {
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
export default function Tab(props: IProps): JSX.Element;
export {};
