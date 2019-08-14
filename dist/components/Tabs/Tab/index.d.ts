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
declare function Tab(props: ITabProps): JSX.Element;
declare const _default: Pick<typeof Tab, never>;
export default _default;
