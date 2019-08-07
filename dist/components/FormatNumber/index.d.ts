import React from "react";
interface IProps {
    value: number;
    thousandSeparator?: boolean;
}
export default class FormatNumber extends React.Component<IProps> {
    static defaultProps: {
        thousandSeparator: boolean;
    };
    render(): JSX.Element;
}
export {};
