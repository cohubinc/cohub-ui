import { PureComponent, CSSProperties } from "react";
import Color from "../../../definitions/enums/Color";
import { TBlankButtonProps } from "../Blank";
interface IProps {
    color?: Color;
    fontSize?: number | string;
    textStyle?: CSSProperties;
    block?: boolean;
}
export declare type TTextButtonProps = IProps & Omit<TBlankButtonProps, "color">;
export default class Text extends PureComponent<TTextButtonProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map