/// <reference types="react" />
import { IProps as IIconProps } from "../Icon";
import Color from "src/definitions/enums/Color";
import { ElevationLevel } from "src/definitions/enums/BoxShadow";
interface IProps {
    icon: IIconProps["name"];
    iconColor: IIconProps["color"];
    backgroundColor: Color;
    size: number;
    elevation: ElevationLevel;
    onClick: () => void;
}
export default function FloatingActionButton(props: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map