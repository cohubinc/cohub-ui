import { PureComponent, CSSProperties } from "react";
import Color from "src/definitions/enums/Color";
import { Props as BlankButtonProps } from "src/components/Buttons/Blank";
interface IProps {
    color?: Color;
    fontSize?: number | string;
    textStyle?: CSSProperties;
    block?: boolean;
}
declare type TProps = IProps & Omit<BlankButtonProps, "color">;
export default class Text extends PureComponent<TProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map