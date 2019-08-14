import React, { PureComponent } from "react";

import Segment from "../Segment";
import Typography from "../Typography";
import FormatMoney from "../FormatMoney";
import FormatNumber from "../FormatNumber";
import FormatPercent from "../FormatPercent";

export interface IAttributeListProps {
  items: Array<{ attribute: string; value: any; format: any }>;
  header?: string;
  contrast?: boolean;
  className?: string;
}

export default class AttributeList extends PureComponent<IAttributeListProps> {
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
    const { header, items, contrast, className } = this.props;

    const attributes = items.map(i => (
      <div
        className={`flex justify-between items-center mb-1 ${className}`}
        key={i.attribute}
      >
        <Typography>{i.attribute}</Typography>
        <Typography>{this.formattedValue(i.value, i.format)}</Typography>
      </div>
    ));

    return (
      <Segment
        className="flex flex-column"
        contrast={contrast}
        padded={contrast ? true : false}
      >
        <Typography.Small muted weight={500} uppercase className="mb-1">
          {header}
        </Typography.Small>
        {attributes}
      </Segment>
    );
  }
}
