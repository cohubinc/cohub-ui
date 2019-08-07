import { ReactNode } from "react";
import { IReduxState } from "../redux/reducers";
declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer F> ? ReadonlyArray<DeepPartial<F>> : DeepPartial<T[P]>;
};
interface IMockStoreProviderProps {
    initialState: DeepPartial<IReduxState>;
    children: ReactNode;
}
declare const _default: ({ initialState, children }: IMockStoreProviderProps) => JSX.Element;
export default _default;
