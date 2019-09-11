/// <reference types="react" />
import Color from "../../../definitions/enums/Color";
import { IBaseButtonProps } from "../Base";
export interface IProps {
    color?: Color;
    light?: boolean;
}
export declare type TGhostButtonProps = IProps & Omit<IBaseButtonProps, "raised" | "color">;
export declare const Ghost: ({ color, ...props }: TGhostButtonProps) => JSX.Element;
export declare const PrimaryGhostButton: (props: TGhostButtonProps) => JSX.Element;
export declare const CancelGhostButton: (props: TGhostButtonProps) => JSX.Element;
export default Ghost;
//# sourceMappingURL=index.d.ts.map