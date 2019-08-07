import { DetailedHTMLProps, ButtonHTMLAttributes, LegacyRef } from "react";
export declare type Props = {
    nativeElRef?: LegacyRef<HTMLButtonElement>;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Blank: ({ className, children, style, nativeElRef, ...rest }: Props) => JSX.Element;
export default Blank;
