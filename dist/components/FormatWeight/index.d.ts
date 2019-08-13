import React from "react";
export interface IFormatWeightProps {
    value: number;
}
export default class FormatWeight extends React.Component<IFormatWeightProps> {
    static defaultProps: {
        thousandSeparator: boolean;
    };
    render(): JSX.Element;
}
