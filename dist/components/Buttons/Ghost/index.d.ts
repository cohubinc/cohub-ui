/// <reference types="react" />
import Color from "../../../definitions/enums/Color";
import { IBaseButtonProps } from "../Base";
export interface IProps {
    color?: Color;
    light?: boolean;
}
declare type TProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;
export declare const Ghost: ({ color, ...props }: TProps) => JSX.Element;
export declare const PrimaryGhostButton: (props: TProps) => JSX.Element;
export declare const CancelGhostButton: (props: TProps) => JSX.Element;
export default Ghost;
