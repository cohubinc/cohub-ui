/// <reference types="react" />
import { IIconProps } from "../index";
export declare type TIconName = "add" | "archive" | "arrowDown" | "arrowUp" | "asterisk" | "back" | "bell" | "boxAdd" | "calculator" | "calendar" | "caretDown" | "checkmark" | "chevronDown" | "chevronLeft" | "chevronRight" | "circle" | "circleCheck" | "circlePlus" | "circlePlusInverted" | "circleRemove" | "close" | "columns" | "controlPanel" | "dashboard" | "error" | "edit" | "eye" | "filter" | "forward" | "laptop" | "list" | "print" | "report" | "rows" | "sales" | "save" | "scales" | "search" | "shipping" | "tagDollar" | "trash" | "triangle" | "tripleDotsVertical" | "userGroup" | "user";
declare type TIconMap = {
    [key in TIconName]: (props: IIconProps) => JSX.Element;
};
declare const icons: TIconMap;
export default icons;
export declare const iconNames: TIconName[];
//# sourceMappingURL=index.d.ts.map