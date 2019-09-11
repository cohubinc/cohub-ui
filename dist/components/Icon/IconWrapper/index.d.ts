import { PureComponent } from "react";
import Color from "../../../definitions/enums/Color";
import { IIconProps as IParentProps } from "../index";
interface IProps {
    children: (props: {
        color: Color;
        size: number;
    }) => JSX.Element;
    defaultColor?: Color;
    color?: Color;
}
export declare type IWrapperProps = IProps & IParentProps;
declare class IconWrapper extends PureComponent<IWrapperProps> {
    render(): JSX.Element;
}
export default IconWrapper;
//# sourceMappingURL=index.d.ts.map