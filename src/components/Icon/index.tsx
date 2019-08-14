import React, { MouseEvent, PureComponent } from "react";

import Color from "src/definitions/enums/Color";
import logError from "src/utils/logError";

import icons, { IconName as IconNameUnion } from "./Icons";

export type IconName = IconNameUnion;

export interface IIconProps {
  name: IconName;
  size?: number;
  color?: Color;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}

const DefaultIcon = (props: IIconProps) => {
  const Ico = icons[props.name];

  if (!Ico) {
    logError(`${props.name} Icon does not exist`);
    return null;
  }

  return <Ico {...props} />;
};

const buildIcon = (name: IconName) => (props: Omit<IIconProps, "name">) => (
  <DefaultIcon name={name} {...props} />
);

export default class Icon extends PureComponent<IIconProps> {
  static Add = buildIcon("add");
  static ArrowDown = buildIcon("arrowDown");
  static ArrowUp = buildIcon("arrowUp");
  static Back = buildIcon("back");
  static Bell = buildIcon("bell");
  static BoxAdd = buildIcon("boxAdd");
  static Calculator = buildIcon("calculator");
  static Calendar = buildIcon("calendar");
  static CaretDown = buildIcon("caretDown");
  static Checkmark = buildIcon("checkmark");
  static ChevronDown = buildIcon("chevronDown");
  static ChevronLeft = buildIcon("chevronLeft");
  static ChevronRight = buildIcon("chevronRight");
  static Circle = buildIcon("circle");
  static CircleCheck = buildIcon("circleCheck");
  static CirclePlus = buildIcon("circlePlus");
  static CirclePlusInverted = buildIcon("circlePlusInverted");
  static CircleRemove = buildIcon("circleRemove");
  static Close = buildIcon("close");
  static Columns = buildIcon("columns");
  static ControlPanel = buildIcon("controlPanel");
  static Dashboard = buildIcon("dashboard");
  static Eye = buildIcon("eye");
  static Filter = buildIcon("filter");
  static Laptop = buildIcon("laptop");
  static List = buildIcon("list");
  static Print = buildIcon("print");
  static Report = buildIcon("report");
  static Rows = buildIcon("rows");
  static Sales = buildIcon("sales");
  static Save = buildIcon("save");
  static Scales = buildIcon("scales");
  static Search = buildIcon("search");
  static Shipping = buildIcon("shipping");
  static TagDollar = buildIcon("tagDollar");
  static Trash = buildIcon("trash");
  static Triangle = buildIcon("triangle");
  static TripleDotsVertical = buildIcon("tripleDotsVertical");
  static UserGroup = buildIcon("userGroup");
  static User = buildIcon("user");

  render() {
    return <DefaultIcon {...this.props} />;
  }
}
