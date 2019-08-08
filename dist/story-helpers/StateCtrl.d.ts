interface IRenderProps {
    state: boolean;
    toggleOff: () => void;
}
interface IProps {
    label?: string;
    children: (props: IRenderProps) => JSX.Element;
    toggleInterval?: number | boolean;
    defaultState?: boolean;
}
export default function StateCtrl(props: IProps): JSX.Element;
export {};
