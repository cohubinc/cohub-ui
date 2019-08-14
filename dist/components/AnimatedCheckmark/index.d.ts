/// <reference types="react" />
import "./AnimatedCheckmark.scss";
import Color from "../../definitions/enums/Color";
export interface IAnimatedCheckmarkProps {
    color: string | Color;
    size?: string | number;
}
declare const AnimatedCheckmark: ({ size, color }: IAnimatedCheckmarkProps) => JSX.Element;
export default AnimatedCheckmark;
