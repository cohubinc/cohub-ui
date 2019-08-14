import React from "react";
export interface IFormatPercentProps {
    value: number;
}
export default class FormatPercent extends React.Component<IFormatPercentProps> {
    static defaultProps: {
        thousandSeparator: boolean;
    };
    render(): JSX.Element;
}
