import { Component } from "react";
import "./Tabs.scss";
import Tab from "./Tab";
interface IProps {
    children: Array<JSX.Element | false | null>;
}
export default class Tabs extends Component<IProps> {
    static Tab: typeof Tab;
    render(): JSX.Element;
}
export {};
