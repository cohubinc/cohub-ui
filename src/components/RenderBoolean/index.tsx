import React from "react";

interface IProps {
  value: any;
}
const RenderBoolean = ({ value }: IProps) => (
  <span>{value ? "Yes" : "No"}</span>
);

export default RenderBoolean;
