import React from "react";
interface IProps {
    children: any;
    direction?: "horizontal" | "vertical";
    className?: string;
}
export declare type TFormGroupProps = IProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default function FormGroup({ children, direction, className, ...restProps }: TFormGroupProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map