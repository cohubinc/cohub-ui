import { LegacyRef } from "react";
export declare type TBlankButtonProps = {
    nativeElRef?: LegacyRef<HTMLButtonElement>;
} & JSX.IntrinsicElements["button"];
declare const Blank: ({ className, children, style, nativeElRef, ...rest }: TBlankButtonProps) => JSX.Element;
export default Blank;
