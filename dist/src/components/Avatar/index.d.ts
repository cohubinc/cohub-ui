import { PureComponent } from "react";
interface IProps {
    src: string | null | undefined;
    className?: string;
    name?: string | null;
    size?: number;
}
export default class Avatar extends PureComponent<IProps> {
    static defaultProps: Partial<IProps>;
    render(): JSX.Element;
}
export {};
