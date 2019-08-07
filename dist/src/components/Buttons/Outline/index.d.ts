import Color from "../../../definitions/enums/Color";
import { IBaseButtonProps } from "../Base";
export interface IProps {
    color?: Color;
    light?: boolean;
}
declare type TProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;
export declare const Outline: ({ light, color, ...props }: TProps) => JSX.Element;
export default Outline;
