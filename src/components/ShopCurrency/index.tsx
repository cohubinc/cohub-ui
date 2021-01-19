import React from "react";
import { decode } from "html-entities";

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
    <span className={className}>
      {templateToFormattedMoney(value || 0, shopCurrencyFormat)}{" "}
    </span>
  );
}

function templateToFormattedMoney(
  value: number,
  shopifyCurrencyFormat: string
) {
  const template = stripHtmlAndDecodeHtmlEntities(shopifyCurrencyFormat);
  // Will return something that looks like: "{{amount_with_comma_separator}}"
  const whatToReplace = template.substring(
    template.indexOf("{"),
    template.indexOf("}") + 2
  );
  const defaultPrecision = 2;
  const formattedFloat = (value || 0).toLocaleString(undefined, {
    minimumFractionDigits: defaultPrecision,
    maximumFractionDigits: defaultPrecision,
  });

  return template.replace(whatToReplace, formattedFloat);
}

const stripHtmlAndDecodeHtmlEntities = (markup: string) =>
  decode(markup.replace(/<[^>]*>?/gm, ""));
