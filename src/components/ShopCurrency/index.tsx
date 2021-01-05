import React from "react";

interface IProps {
  shopCurrencyFormat: string;
  value: string | number | null | undefined;
  className: string;
}

export default function ShopCurrency(props: IProps) {
  const { shopCurrencyFormat, className } = props;
  // Will return something that looks like: "{{amount_with_comma_separator}}"
  const replaceable = shopCurrencyFormat.substring(
    shopCurrencyFormat.indexOf("{"),
    shopCurrencyFormat.indexOf("}") + 2
  );
  const value =
    typeof props.value === "string"
      ? Number.parseFloat(props.value)
      : props.value;

  const delimited = (value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: shopCurrencyFormat.replace(replaceable, delimited),
      }}
    />
  );
}
