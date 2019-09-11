import { ReactNode } from "react";
export interface IExpanderProps {
    children: ReactNode;
    duration?: number;
    expandElement?: ReactNode;
    collapseElement?: ReactNode;
    expandElementPosition?: "above" | "below";
    labelPosition?: "left" | "center" | "right";
}
export default function Expander({ children, duration, expandElement, collapseElement, expandElementPosition, labelPosition }: IExpanderProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map