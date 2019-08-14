import { ReactElement } from "react";
import { ITabProps } from "./Tab";
import "./Tabs.scss";
export interface ITabsProps {
    children: Array<ReactElement<ITabProps>>;
    /**
     * If using this component in an app that doesnt use connected-react-router
     * this must be set to false
     * @defaultValue true
     */
    useRedux?: boolean;
}
declare function Tabs(props: ITabsProps): JSX.Element;
declare namespace Tabs {
    var Tab: Pick<(props: ITabProps) => JSX.Element, never>;
}
export default Tabs;
