import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { IProps as IIconProps } from "../Icon";
<<<<<<< HEAD
import Color from "src/definitions/enums/Color";
import { ElevationLevel } from "src/definitions/enums/BoxShadow";
interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
=======
import Color from "../../definitions/enums/Color";
import { ElevationLevel } from "../../definitions/enums/BoxShadow";
interface IProps {
>>>>>>>   Transform absolute imports to relative.
    icon: IIconProps["name"];
    iconColor: IIconProps["color"];
    backgroundColor: Color;
    size: number;
    elevation: ElevationLevel;
}
export default function FloatingActionButton(props: IProps): JSX.Element;
export {};
