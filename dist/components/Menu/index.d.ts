/// <reference types="react" />
import "./Menu.scss";
interface IMenuItem {
    label: string;
    action: any;
}
export interface IMenuProps {
    orientation?: "horizontal" | "vertical";
    appearance?: "light" | "dark";
    size?: "small" | "regular";
    items: IMenuItem[];
}
export default function Menu({ orientation, appearance, size, items }: IMenuProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map