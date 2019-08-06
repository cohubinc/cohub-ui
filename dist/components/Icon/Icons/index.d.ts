/// <reference types="react" />
import { IProps } from "../index";
import TIconName from "src/definitions/interfaces/TIconName";
declare type TIconMap = {
    [key in TIconName]: (props: IProps) => JSX.Element;
};
declare const icons: TIconMap;
export default icons;
export declare const iconNames: TIconName[];
//# sourceMappingURL=index.d.ts.map