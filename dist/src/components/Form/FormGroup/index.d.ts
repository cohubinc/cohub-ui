import React from "react";
interface IProps {
    children: any;
    direction: "horizontal" | "vertical";
}
declare type TProps = IProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default class FormGroup extends React.PureComponent<TProps> {
    static defaultProps: Partial<TProps>;
    render(): JSX.Element;
}
export {};
