import * as React from "react";
import * as ReactDOM from "react-dom";
import { CssFramework, Color, Buttons, Typography, Color } from "../dist/";

const App = () => {
  return (
    <div className="flex justify-center items-center h-100">
      <CssFramework />
      <Buttons.Dropdown
        buttonType="Primary"
        options={[
          {
            onClick: () => console.log("Option one click"),
            label: "Option One"
          },
          {
            onClick: () => console.log("Option two click"),
            label: "Option Two"
          },
          {
            onClick: () => console.log("Option three click"),
            label: "Option Three"
          },
          {
            onClick: () => console.log("Option four click"),
            label: "Option Four"
          }
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
