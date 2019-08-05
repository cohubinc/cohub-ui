/// <reference types="react" />
import Color from "src/definitions/enums/Color";
import { IBaseButtonProps } from "../Base";
interface IProps {
    color?: Color;
    light?: boolean;
}
declare type TProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;
export declare const Outline: ({ light, color, ...props }: TProps) => JSX.Element;
export default Outline;
