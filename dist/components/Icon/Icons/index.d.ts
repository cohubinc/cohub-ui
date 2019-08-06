/// <reference types="react" />
import { IProps } from "../index";
import TIconName from "../../../definitions/types/TIconName";
declare type TIconMap = {
    [key in TIconName]: (props: IProps) => JSX.Element;
};
declare const icons: TIconMap;
export default icons;
export declare const iconNames: TIconName[];
