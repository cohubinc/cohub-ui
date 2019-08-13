import React from "react";
interface IProps {
    children: any;
    direction: "horizontal" | "vertical";
}
export declare type TFormGroupProps = IProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default class FormGroup extends React.PureComponent<TFormGroupProps> {
    static defaultProps: Partial<TFormGroupProps>;
    render(): JSX.Element;
}
export {};
