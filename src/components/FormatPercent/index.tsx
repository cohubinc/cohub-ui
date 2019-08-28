import React from "react";
import NumberFormat from "react-number-format";

export interface IFormatPercentProps {
  value: number | string | null | undefined;
}

export default function FormatPercent({ value }: IFormatPercentProps) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    value = parseFloat(value) * 100;
  }

  const percentValue = value * 100;

  return (
    <NumberFormat
      value={percentValue}
      displayType={"text"}
      thousandSeparator={true}
      decimalScale={2}
      suffix="%"
    />
  );
}
