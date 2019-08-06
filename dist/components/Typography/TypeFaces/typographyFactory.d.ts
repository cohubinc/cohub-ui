/// <reference types="react" />
import IProps from "../definitions/IProps";
declare type TFactoryArgs = Omit<IProps, "children">;
export declare function typographyFactory(defaultProps: TFactoryArgs): (props: IProps) => JSX.Element | null;
export {};
