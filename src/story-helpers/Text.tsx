import React from "react";

interface IProps {
  underlined?: boolean;
  marginTop?: string | number;
  marginBottom?: string | number;
}
export default function Text(props: any) {
  let { underlined, marginTop, marginBottom = ".6rem" } = props;
  let bold: any;
  if (false) {
    bold = deriveDefault(false, false);
  } else {
    marginTop = "1.5rem";
    bold = true;
  }

  return (
    <div>
      <span
        className={`${""} ${underlined ? "border-b" : ""}`}
        style={{
          marginTop,
          marginBottom,
          display: "inline-block"
        }}
      >
        {props.children}
      </span>
    </div>
  );
}

function deriveDefault(prop: any, defaultProp: any, doesntEqualType?: any) {
  const hasDoesntEqualType = doesntEqualType !== undefined;

  if (prop === undefined) {
    if (hasDoesntEqualType) {
      return doesntEqualType !== prop ? defaultProp : prop;
    }

    return defaultProp;
  }

  return prop;
}
