import React from "react";
import NumberFormat from "react-number-format";
import ShopCurrency from "../ShopCurrency";

export interface IFormatMoneyProps {
  value: string | number | null | undefined;
  className?: string;
  currency?: string;
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
  /**
   * html (liquid) string from Shopify
   */
  shopCurrencyFormat?: string | null;
}

export default function FormatMoney({
  value,
  extendedPrecision = true,
  className = "",
  currency = "USD",
  shopCurrencyFormat,
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
  } else if (shopCurrencyFormat) {
    return (
      <ShopCurrency
        shopCurrencyFormat={shopCurrencyFormat}
        value={value}
        className={className}
      />
    );
  } else {
    return (
      <NumberFormat
        value={value || 0}
        displayType="text"
        thousandSeparator
        fixedDecimalScale
        prefix={currencySymbol()}
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
