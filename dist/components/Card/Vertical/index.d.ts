import React, { CSSProperties, PureComponent, ReactNode } from "react";
import { ElevationLevel } from "../../../definitions/enums/BoxShadow";
export default interface IVerticalCardProps {
    /**
     * The main identifying text
     */
    title: string;
    /**
     * If true, centers the title, subtitle, and meta text
     */
    centered?: boolean;
    /**
     * If true, formats the title as a link
     */
    titleLink?: string;
    subtitle?: string | ReactNode;
    meta?: string;
    /**
     * An array of objects that each have a name and an action. The action is usually a function, but doesn't have to be
     */
    actions?: Array<{
        name: string;
        action: any;
    }>;
    /**
     * A url for the card's image
     */
    imageUrl?: string | null;
    /**
     * If true, puts the image in a circular element with a slightly inset shadow
     */
    avatar?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
    /**
     * The level of drop shadow that shows beneath the card
     */
    elevation?: ElevationLevel;
}
export default class Vertical extends PureComponent<IVerticalCardProps> {
    static defaultProps: Partial<IVerticalCardProps>;
    render(): JSX.Element;
}
