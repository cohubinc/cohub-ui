import React, { RefObject } from "react";
interface IProps {
    children: string;
    selected: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onFocus?: () => void;
    nativeElRef?: RefObject<HTMLButtonElement>;
    ["data-testid"]?: string;
}
export default function Option({ children, selected, onClick, onFocus, nativeElRef, ...rest }: IProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map