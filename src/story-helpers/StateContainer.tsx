import { useState } from "react";

interface IRenderProps<T = string> {
  state?: T;
  setState: (state: any) => void;
}
interface IProps<T = string> {
  initialState?: T;
  children: (props: IRenderProps<T>) => JSX.Element;
}
export default function StateContainer<T>({
  initialState,
  children
}: IProps<T>) {
  const [state, setState] = useState(initialState);

  return children({ state, setState });
}
