import React from "react";
import NumberFormat from "react-number-format";

export interface IFormatPercentProps {
  value: number;
}

export default class FormatPercent extends React.Component<
  IFormatPercentProps
> {
  static defaultProps = {
    thousandSeparator: false
  };

  render() {
    const { value } = this.props;

    const percentValue = value * 100;

    return (
      <NumberFormat
        value={percentValue}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        suffix={"%"}
      />
    );
  }
}
