import React from "react";
import NumberFormat from "react-number-format";

interface IProps {
  value: number;
  thousandSeparator?: boolean;
}

export default class FormatNumber extends React.Component<IProps> {
  static defaultProps = {
    thousandSeparator: true
  };

  render() {
    const { value, ...rest } = this.props;

    return <NumberFormat value={value} displayType={"text"} {...rest} />;
  }
}
