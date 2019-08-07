import React, { PureComponent } from "react";
import CurrencyFormat from "react-number-format";

interface IProps {
  value: number;
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
  "data-qa"?: string;
}

class FormatMoney extends PureComponent<IProps> {
  static defaultProps: Partial<IProps> = {
    extendedPrecision: true
  };

  render() {
    const { value, extendedPrecision, "data-qa": dataQa } = this.props;

    const decimals = `${value}`.split(".")[1];

    return (
      <span data-qa={dataQa}>
        <CurrencyFormat
          value={value}
          displayType="text"
          prefix="$"
          thousandSeparator
          fixedDecimalScale
          decimalScale={
            extendedPrecision && decimals && decimals.length > 2
              ? decimals.length
              : 2
          }
        />
      </span>
    );
  }
}

export default FormatMoney;
