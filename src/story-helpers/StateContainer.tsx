import { useState } from "react";

interface IRenderProps<T = string> {
  state?: T;
  setState: (state?: T) => void;
}
interface IProps<T = string> {
  defaultState?: T;
  children: (props: IRenderProps<T>) => JSX.Element;
}
export default function StateContainer<T>({
  defaultState,
  children
}: IProps<T>) {
  const [state, setState] = useState(defaultState);

  return children({ state, setState });
}
