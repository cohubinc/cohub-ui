/// <reference types="react" />
import { IIconProps } from "../index";
export declare type IconName = "add" | "arrowDown" | "arrowUp" | "back" | "bell" | "boxAdd" | "calculator" | "calendar" | "caretDown" | "checkmark" | "chevronDown" | "chevronLeft" | "chevronRight" | "circle" | "circleCheck" | "circlePlus" | "circlePlusInverted" | "circleRemove" | "close" | "columns" | "controlPanel" | "dashboard" | "eye" | "filter" | "forward" | "laptop" | "list" | "print" | "report" | "rows" | "sales" | "save" | "scales" | "search" | "shipping" | "tagDollar" | "trash" | "triangle" | "tripleDotsVertical" | "userGroup" | "user";
declare type TIconMap = {
    [key in IconName]: (props: IIconProps) => JSX.Element;
};
declare const icons: TIconMap;
export default icons;
export declare const iconNames: IconName[];
