/// <reference types="react" />
import Color from "../../../definitions/enums/Color";
import { TIconName } from "../../Icon/Icons";
import "./Base.scss";
declare type TRootButtonProps = JSX.IntrinsicElements["button"];
export interface IBaseButtonProps extends TRootButtonProps {
    /** Shows success checkmark animation */
    success?: boolean;
    /** Shows error color */
    error?: boolean;
    /**
     * Shows button in raised state
     * @defaultValue true
     */
    raised?: boolean;
    /**
     * Background color of button
     */
    backgroundColor?: Color;
    /**
     * Name of Icon
     */
    icon?: TIconName;
    /**
     * Position of Icon
     */
    iconPosition?: "left" | "right";
    /**
     * Size of Icon
     */
    iconSize?: number;
}
export default function Base(props: IBaseButtonProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map