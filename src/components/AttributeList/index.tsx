import React from "react";

import Segment from "../Segment";
import Typography from "../Typography";
import FormatMoney from "../FormatMoney";
import FormatNumber from "../FormatNumber";
import FormatPercent from "../FormatPercent";
import Expander from "../Expander";

type TAttributeListItem = {
  attribute: string;
  value: any;
  format: any;
};

export interface IAttributeListProps {
  items: Array<TAttributeListItem>;
  header?: string;
  contrast?: boolean;
  className?: string;
  maxVisible?: number;
  expandable?: boolean;
  bordered?: boolean;
  typographySize?: "Tiny" | "Small" | "Large";
}

export default function AttributeList({
  header,
  items,
  contrast,
  className,
  maxVisible,
  expandable = false,
  bordered = false,
  typographySize
}: IAttributeListProps) {
  const formattedValue = (value: any, format: any) => {
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
        return value;
    }
  };

  const textSizeSwitch = (item: TAttributeListItem) => {
    switch (typographySize) {
      case "Tiny":
        return (
          <div
            className={`${className} flex justify-between items-center my-05`}
            key={item.attribute}
          >
            <Typography.Tiny>{item.attribute}</Typography.Tiny>
            <Typography.Tiny alignment="right">
              {formattedValue(item.value, item.format)}
            </Typography.Tiny>
          </div>
        );
      case "Small":
        return (
          <div
            className={`${className} flex justify-between items-center my-05`}
            key={item.attribute}
          >
            <Typography.Small>{item.attribute}</Typography.Small>
            <Typography.Small alignment="right">
              {formattedValue(item.value, item.format)}
            </Typography.Small>
          </div>
        );
      case "Large":
        return (
          <div
            className={`${className} flex justify-between items-center my-05`}
            key={item.attribute}
          >
            <Typography.Large>{item.attribute}</Typography.Large>
            <Typography.Large alignment="right">
              {formattedValue(item.value, item.format)}
            </Typography.Large>
          </div>
        );
      default:
        return (
          <div
            className={`${className} flex justify-between items-center my-05`}
            key={item.attribute}
          >
            <Typography>{item.attribute}</Typography>
            <Typography alignment="right">
              {formattedValue(item.value, item.format)}
            </Typography>
          </div>
        );
    }
  };

  let hiddenAttributes = null;
  let visibleAttributes = items.map(i => {
    return textSizeSwitch(i);
  });

  if (maxVisible) {
    hiddenAttributes = visibleAttributes.splice(maxVisible);
  }

  return (
    <Segment
      className="flex flex-column"
      contrast={contrast}
      padded={contrast ? true : false}
      bordered={bordered}
      elevation={bordered ? 1 : 0}
    >
      <Typography.Small muted weight={500} uppercase className="mb-1">
        {header}
      </Typography.Small>
      {visibleAttributes}
      {expandable && (
        <Expander
          labelPosition="center"
          expandElement={<Typography muted>More</Typography>}
          expandElementPosition="below"
          collapseElement={<Typography muted>Less</Typography>}
        >
          {hiddenAttributes}
        </Expander>
      )}
    </Segment>
  );
}
