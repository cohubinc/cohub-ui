import React from "react";
export interface ITabProps {
    /**
     * Tab title
     */
    title: string;
    /**
     * Weather or not the tab is active (selected)
     */
    active?: boolean;
    /**
     * Url string used to determine weather or not the tab should be active
     */
    path?: string;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * The component that will be rendered when the tab is active
     */
    component?: any;
    /**
     * Classes that gets applied to the container
     */
    className?: string;
    /**
     * Weather or not to show the count
     */
    showCount?: boolean;
    count?: number;
}
export interface IHiddenProps extends ITabProps {
    showActiveStyles: boolean;
    useRedux?: boolean;
}
declare const _default: React.ElementType<ITabProps>;
export default _default;
//# sourceMappingURL=index.d.ts.map