import React from "react";
import NumberFormat from "react-number-format";

export interface IFormatMoneyProps {
  value: string | number | null | undefined;
  className?: string;
  currency?: string;
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
}

export default function FormatMoney({
  value,
  extendedPrecision = true,
  className = "",
  currency = "USD",
}: IFormatMoneyProps) {
  const decimals = `${value}`.split(".")[1];

  const currencySymbol = () => {
    switch (currency) {
      case "USD":
        return "$";
      case "CAD":
        return "$";
      case "GBP":
        return "£";
      case "EUR":
        return "€";
      default:
        return "$";
    }
  };

  if (value === null || value === undefined) {
    return null;
  } else {
    return (
      <NumberFormat
        value={value || 0}
        displayType="text"
        prefix={currencySymbol()}
        thousandSeparator
        fixedDecimalScale
        className={className}
        decimalScale={
          extendedPrecision && decimals && decimals.length > 2
            ? decimals.length
            : 2
        }
      />
    );
  }
}
