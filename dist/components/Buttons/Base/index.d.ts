import React from "react";
import Color from "src/definitions/enums/Color";
import TIconName from "src/definitions/interfaces/TIconName";
import "./Base.scss";
export interface IBaseButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
//# sourceMappingURL=index.d.ts.map