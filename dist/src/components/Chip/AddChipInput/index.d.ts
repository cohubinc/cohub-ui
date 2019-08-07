import React, { CSSProperties } from "react";
declare const defaultState: {
    expanded: boolean;
};
interface IProps {
    name?: string;
    onBlur?: any;
    onChange?: any;
    onFocus?: any;
    className?: string;
    style?: CSSProperties;
}
export default class AddChipInput extends React.Component<IProps, typeof defaultState> {
    _input: React.RefObject<HTMLInputElement>;
    state: {
        expanded: boolean;
    };
    constructor(props: IProps);
    render(): JSX.Element;
    toggleState: () => void;
}
export {};
