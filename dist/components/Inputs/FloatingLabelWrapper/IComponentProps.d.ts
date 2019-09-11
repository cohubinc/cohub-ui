import OnChangeEvent from "./OnChangeEvent";
import OnEvent from "./OnEvent";
import { CSSProperties } from "react";
export default interface IComponentProps<T = any> {
    value?: T;
    onChange?: OnChangeEvent;
    onFocus: OnEvent;
    onBlur: OnEvent;
    onClick?: OnEvent;
    id?: string;
    style: CSSProperties;
    ["aria-invalid"]?: boolean;
}
//# sourceMappingURL=IComponentProps.d.ts.map