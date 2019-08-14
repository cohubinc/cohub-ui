import { PureComponent } from "react";
export interface IAvatarProps {
    src: string | null | undefined;
    className?: string;
    name?: string | null;
    size?: number;
}
export default class Avatar extends PureComponent<IAvatarProps> {
    static defaultProps: Partial<IAvatarProps>;
    render(): JSX.Element;
}
