import { ReactNode, useState } from "react";

interface IRenderProps<T> {
  state: T;
  setState: (state: any) => void;
}
interface IProps<T> {
  initialState: T;
  children: (props: IRenderProps<T>) => ReactNode;
}
export default function StateContainer<T>({
  initialState,
  children
}: IProps<T>) {
  const [state, setState] = useState(initialState);

  return children({ state, setState });
}
