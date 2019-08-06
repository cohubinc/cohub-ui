import React, { MouseEvent, PureComponent } from "react";
import Color from "../../definitions/enums/Color";
import TIconName from "src/definitions/interfaces/TIconName";
import "./Icon.scss";
export interface IProps {
    name: TIconName;
    size?: number;
    color?: Color;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e?: MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
}
export default class Icon extends PureComponent<IProps> {
    static Add: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static ArrowDown: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static ArrowUp: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Bell: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Back: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Calculator: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Calendar: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static CaretDown: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static ChevronDown: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static ChevronLeft: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static ChevronRight: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Circle: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static CircleCheck: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static CirclePlus: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static CirclePlusInverted: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static CircleRemove: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Close: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Columns: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static ControlPanel: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Dashboard: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Eye: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Laptop: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Report: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Sales: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Save: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Scales: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Search: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Shipping: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static TagDollar: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Trash: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static Triangle: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static TripleDotsVertical: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static UserGroup: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    static User: (props: Pick<IProps, "size" | "color" | "className" | "style" | "onClick" | "disabled">) => JSX.Element;
    render(): JSX.Element;
}
//# sourceMappingURL=index.d.ts.map