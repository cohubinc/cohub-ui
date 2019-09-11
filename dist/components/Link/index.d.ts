import React from "react";
import { TLinkProps } from "./TLinkProps";
import "./Link.scss";
declare class Link extends React.Component<TLinkProps> {
    static Muted: ({ children, ...rest }: TLinkProps) => JSX.Element;
    static defaultProps: Partial<TLinkProps>;
    render(): JSX.Element;
}
export default Link;
//# sourceMappingURL=index.d.ts.map