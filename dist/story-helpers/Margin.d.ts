/// <reference types="react" />
import { IDividerProps, TMargin } from "../components/Divider";
interface IProps extends Omit<IDividerProps, "marginSize"> {
    /**
     * Margin as rems used on Y axis of element
     * @defaultValue 1.5
     */
    marginSize?: TMargin;
}
export default function Margin(props: IProps): JSX.Element;
export {};
