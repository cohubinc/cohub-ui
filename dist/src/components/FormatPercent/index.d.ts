import React from "react";
interface IProps {
    value: number;
}
export default class FormatPercent extends React.Component<IProps> {
    static defaultProps: {
        thousandSeparator: boolean;
    };
    render(): JSX.Element;
}
export {};
