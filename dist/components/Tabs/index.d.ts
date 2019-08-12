import { ReactElement } from "react";
import { IProps as TabProps } from "./Tab";
import "./Tabs.scss";
interface IProps {
    children: Array<ReactElement<TabProps>>;
    /**
     * If using this component in an app that doesnt use connected-react-router
     * this must be set to false
     * @defaultValue true
     */
    useRedux?: boolean;
}
declare function Tabs(props: IProps): JSX.Element;
declare namespace Tabs {
    var Tab: Pick<(props: TabProps) => JSX.Element, never>;
}
export default Tabs;
