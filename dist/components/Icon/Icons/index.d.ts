/// <reference types="react" />
import { IProps } from "../index";
export declare type IconName = "add" | "arrowDown" | "arrowUp" | "back" | "bell" | "calculator" | "calendar" | "caretDown" | "checkmark" | "chevronDown" | "chevronLeft" | "chevronRight" | "circle" | "circleCheck" | "circlePlus" | "circlePlusInverted" | "circleRemove" | "close" | "columns" | "controlPanel" | "dashboard" | "eye" | "forward" | "laptop" | "report" | "sales" | "save" | "scales" | "search" | "shipping" | "tagDollar" | "trash" | "triangle" | "tripleDotsVertical" | "userGroup" | "user";
declare type TIconMap = {
    [key in IconName]: (props: IProps) => JSX.Element;
};
declare const icons: TIconMap;
export default icons;
export declare const iconNames: IconName[];
//# sourceMappingURL=index.d.ts.map