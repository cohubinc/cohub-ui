import React, { CSSProperties, PureComponent, ReactNode } from "react";
import { ElevationLevel } from "../../../definitions/enums/BoxShadow";
interface IProps {
    /**
     * The main identifying text
     */
    title: string;
    subtitle?: ReactNode;
    meta?: string;
    titleLink?: string;
    /**
     * An array of objects that each have a name and an action. The action is usually a function, but doesn't have to be
     */
    actions?: Array<{
        name: string;
        action: any;
    }>;
    /**
     * If true, puts the image in a circular element with a slightly inset shadow
     */
    avatar?: boolean;
    /**
     * A url for the card's image
     */
    imageUrl?: string | null;
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
    /**
     * The level of drop shadow that shows beneath the card
     */
    elevation?: ElevationLevel;
}
export default class Horizontal extends PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
