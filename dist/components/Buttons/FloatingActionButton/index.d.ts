/// <reference types="react" />
import { IIconProps } from "../../Icon";
import Color from "../../../definitions/enums/Color";
import { ElevationLevel } from "../../../definitions/enums/BoxShadow";
import { TBlankButtonProps } from "../Blank";
interface IProps {
    icon: IIconProps["name"];
    iconColor: IIconProps["color"];
    backgroundColor: Color;
    size: number;
    elevation: ElevationLevel;
}
declare type TProps = IProps & TBlankButtonProps;
export default function FloatingActionButton({ icon, iconColor, backgroundColor, size, elevation, ...rest }: TProps): JSX.Element;
export {};
