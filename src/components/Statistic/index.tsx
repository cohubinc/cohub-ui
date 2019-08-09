import React, { PureComponent } from "react";
import Typography from "../Typography";
import FormatMoney from "../FormatMoney";
import FormatNumber from "../FormatNumber";
import FormatPercent from "../FormatPercent";

interface IProps {
  size?: "tiny" | "small" | "regular" | "large" | "xlarge" | "huge";
  /**
   * The formatting that should be applied to the Statistics value
   */
  format: "money" | "number" | "percentage" | "text";
  label: string;
  value: number | string;
}

export default class Statistic extends PureComponent<IProps> {
  static defaultProps = {
    size: "regular"
  };

  formattedValue = (value: any, format: any) => {
    switch (format) {
      case "money":
        return <FormatMoney value={value} />;
      case "number":
        return <FormatNumber value={value} />;
      case "percentage":
        return <FormatPercent value={value} />;
      case "text":
        return value;
      default:
        return <FormatNumber value={value} />;
    }
  };

  render() {
    const { label, size, value, format } = this.props;

    switch (size) {
      case "tiny":
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography.Small>
              {this.formattedValue(value, format)}
            </Typography.Small>
            <Typography.Tiny uppercase muted>
              {label}
            </Typography.Tiny>
          </div>
        );
      case "small":
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography.Small>
              {this.formattedValue(value, format)}
            </Typography.Small>
            <Typography.Small uppercase muted>
              {label}
            </Typography.Small>
          </div>
        );
      case "regular":
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography>{this.formattedValue(value, format)}</Typography>
            <Typography.Small uppercase muted>
              {label}
            </Typography.Small>
          </div>
        );
      case "large":
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography.Large>
              {this.formattedValue(value, format)}
            </Typography.Large>
            <Typography.Small uppercase muted>
              {label}
            </Typography.Small>
          </div>
        );
      case "xlarge":
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography.HeadingSmall weight={600}>
              {this.formattedValue(value, format)}
            </Typography.HeadingSmall>
            <Typography uppercase muted>
              {label}
            </Typography>
          </div>
        );
      case "huge":
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography.HeadingLarge weight={600}>
              {this.formattedValue(value, format)}
            </Typography.HeadingLarge>
            <Typography uppercase muted>
              {label}
            </Typography>
          </div>
        );
      default:
        return (
          <div className="flex flex-column justify-center items-center">
            <Typography weight={600}>
              {this.formattedValue(value, format)}
            </Typography>
            <Typography.Small uppercase muted>
              {label}
            </Typography.Small>
          </div>
        );
    }
  }
}
