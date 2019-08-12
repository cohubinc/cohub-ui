import { LegacyRef } from "react";
export declare type Props = {
    nativeElRef?: LegacyRef<HTMLButtonElement>;
} & JSX.IntrinsicElements["button"];
declare const Blank: ({ className, children, style, nativeElRef, ...rest }: Props) => JSX.Element;
export default Blank;
