import React from "react";

export default function Text(props: any) {
  let { underlined, marginTop, marginBottom = ".6rem" } = props;

  if (true) {
    marginTop = "1.5rem";
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
