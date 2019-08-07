import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TInputElementProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
>;

export default TInputElementProps;
