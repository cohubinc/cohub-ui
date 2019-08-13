import React from "react";
import NumberFormat from "react-number-format";

export interface IFormatNumberProps {
  value: number;
  thousandSeparator?: boolean;
}

export default class FormatNumber extends React.Component<IFormatNumberProps> {
  static defaultProps = {
    thousandSeparator: true
  };

  render() {
    const { value, ...rest } = this.props;

    return <NumberFormat value={value} displayType={"text"} {...rest} />;
  }
}
