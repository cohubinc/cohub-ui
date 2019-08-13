import { Component } from "react";
import "./Tabs.scss";
import Tab from "./Tab";
export interface ITabsProps {
    children: Array<JSX.Element | false | null>;
}
export default class Tabs extends Component<ITabsProps> {
    static Tab: typeof Tab;
    render(): JSX.Element;
}
