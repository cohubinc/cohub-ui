import React, { ReactElement } from "react";
import { ITabProps } from "./Tab";
import "./Tabs.scss";
declare type TChild<T = ITabProps> = ReactElement<T>;
export interface ITabsProps {
    children: Array<TChild | null | false>;
    /**
     * If using this component in an app that doesnt use connected-react-router
     * this must be set to false
     * @defaultValue true
     */
    useRedux?: boolean;
}
declare function Tabs(props: ITabsProps): JSX.Element;
declare namespace Tabs {
    var Tab: React.ElementType<ITabProps>;
}
export default Tabs;
//# sourceMappingURL=index.d.ts.map