import React from "react";
export interface IFormatNumberProps {
    value: number;
    thousandSeparator?: boolean;
}
export default class FormatNumber extends React.Component<IFormatNumberProps> {
    static defaultProps: {
        thousandSeparator: boolean;
    };
    render(): JSX.Element;
}
