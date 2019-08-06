import { Component } from "react";
interface IState {
    value: number;
}
export default class MoneyDemo extends Component<any, IState> {
    state: IState;
    render(): JSX.Element;
    private handleChange;
}
export {};
