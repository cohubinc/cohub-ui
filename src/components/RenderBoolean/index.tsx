import React from "react";

export interface IRenderBooleanProps {
  value: any;
}
const RenderBoolean = ({ value }: IRenderBooleanProps) => (
  <span>{value ? "Yes" : "No"}</span>
);

export default RenderBoolean;
