import React from "react";
import NumberFormat from "react-number-format";

interface IProps {
  value: number;
}

export default class FormatWeight extends React.Component<IProps> {
  static defaultProps = {
    thousandSeparator: false
  };

  render() {
    const { value } = this.props;

    return (
      <NumberFormat
        value={value}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        suffix={" lbs."}
      />
    );
  }
}
