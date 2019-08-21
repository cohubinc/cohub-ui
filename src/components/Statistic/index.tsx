import React from "react";
import Typography from "../Typography";
import FormatMoney from "../FormatMoney";
import FormatNumber from "../FormatNumber";
import FormatPercent from "../FormatPercent";
import Color from "../../definitions/enums/Color";

export interface IStatisticProps {
  size?: "small" | "regular" | "large" | "xlarge" | "huge";
  /**
   * The formatting that should be applied to the Statistics value
   */
  format: "money" | "number" | "percentage" | "text";
  label: string;
  value: number | string;
  color?: Color;
}

export default function Statistic({
  size = "regular",
  format,
  label,
  value,
  color = Color.black500
}: IStatisticProps) {
  const formattedValue = (val: any) => {
    switch (format) {
      case "money":
        return <FormatMoney value={val} />;
      case "number":
        return <FormatNumber value={val} />;
      case "percentage":
        return <FormatPercent value={val} />;
      case "text":
        return value;
      default:
        return <FormatNumber value={val} />;
    }
  };

  switch (size) {
    case "small":
      return (
        <div className="flex flex-column justify-center items-center">
          <Typography.Small color={color} weight={600}>
            {formattedValue(value)}
          </Typography.Small>
          <Typography.Small uppercase muted>
            {label}
          </Typography.Small>
        </div>
      );
    case "regular":
      return (
        <div className="flex flex-column justify-center items-center">
          <Typography.Large color={color} weight={600}>
            {formattedValue(value)}
          </Typography.Large>
          <Typography uppercase muted>
            {label}
          </Typography>
        </div>
      );
    case "large":
      return (
        <div className="flex flex-column justify-center items-center">
          <Typography.HeadingTiny color={color} weight={600}>
            {formattedValue(value)}
          </Typography.HeadingTiny>
          <Typography.Large uppercase muted>
            {label}
          </Typography.Large>
        </div>
      );
    case "xlarge":
      return (
        <div className="flex flex-column justify-center items-center">
          <Typography.HeadingLarge weight={600} color={color}>
            {formattedValue(value)}
          </Typography.HeadingLarge>
          <Typography.Large uppercase muted>
            {label}
          </Typography.Large>
        </div>
      );
    case "huge":
      return (
        <div className="flex flex-column justify-center items-center">
          <Typography.Subtitle weight={600} color={color}>
            {formattedValue(value)}
          </Typography.Subtitle>
          <Typography.HeadingTiny uppercase muted>
            {label}
          </Typography.HeadingTiny>
        </div>
      );
    default:
      return (
        <div className="flex flex-column justify-center items-center">
          <Typography.Large color={color} weight={600}>
            {formattedValue(value)}
          </Typography.Large>
          <Typography uppercase muted>
            {label}
          </Typography>
        </div>
      );
  }
}
