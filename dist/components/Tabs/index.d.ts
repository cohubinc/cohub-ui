import { Component } from "react";
import "./Tabs.scss";
interface IProps {
    children: Array<JSX.Element | false | null>;
}
export default class Tabs extends Component<IProps> {
    render(): JSX.Element;
}
export {};
