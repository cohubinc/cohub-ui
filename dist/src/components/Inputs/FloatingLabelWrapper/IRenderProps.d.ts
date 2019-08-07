import IComponentProps from "./IComponentProps";
export default interface IRenderProps<T = any> {
    componentProps: IComponentProps<T | undefined>;
    setInputRef: (el: HTMLInputElement) => void;
}
