import React from "react";
import NumberFormat from "react-number-format";

export interface IFormatMoneyProps {
  value: string | number | null | undefined;
  className?: string;
  /**
   * Use to extend decimal precision
   */
  extendedPrecision?: boolean;
}

export default function FormatMoney({
  value,
  extendedPrecision = true,
  className = ""
}: IFormatMoneyProps) {
  const decimals = `${value}`.split(".")[1];

  if (value === null || value === undefined) {
    return null;
  } else {
    return (
      <NumberFormat
        value={value || 0}
        displayType="text"
        prefix="$"
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
