/// <reference types="react" />
interface IRenderProps {
    rangeLevel: number;
}
interface IProps {
    label?: string;
    children: (props: IRenderProps) => JSX.Element;
    defaultState?: number;
}
export default function StateSlider(props: IProps): JSX.Element;
export {};
//# sourceMappingURL=StateSlider.d.ts.map