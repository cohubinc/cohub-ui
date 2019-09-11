/// <reference types="react" />
import Color from "../../../definitions/enums/Color";
import { IBaseButtonProps } from "../Base";
export interface IProps {
    color?: Color;
    light?: boolean;
}
export declare type TOutlineButtonProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;
export declare const Outline: ({ light, color, ...props }: TOutlineButtonProps) => JSX.Element;
export default Outline;
//# sourceMappingURL=index.d.ts.map