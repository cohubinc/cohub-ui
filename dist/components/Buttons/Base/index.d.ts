import Color from "../../../definitions/enums/Color";
import TIconName from "../../../definitions/types/TIconName";
import "./Base.scss";
export declare type TRootElementProps = JSX.IntrinsicElements["button"];
export interface IBaseButtonProps extends TRootElementProps {
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
