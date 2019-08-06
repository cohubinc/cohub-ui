/// <reference types="react" />
import { IProps as IIconProps } from "../../Icon";
import Color from "src/definitions/enums/Color";
import { ElevationLevel } from "src/definitions/enums/BoxShadow";
import { IBaseButtonProps } from "src/components/Buttons/Base/index";
interface IProps {
    icon: IIconProps["name"];
    iconColor: IIconProps["color"];
    backgroundColor: Color;
    size: number;
    elevation: ElevationLevel;
}
declare type TProps = IProps & IBaseButtonProps;
export default function FloatingActionButton({ icon, iconColor, backgroundColor, size, elevation, ...rest }: TProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map