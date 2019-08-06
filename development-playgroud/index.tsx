import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CssFramework,
  Color,
  Buttons,
  Typography,
  Color,
  SplitButton
} from "../dist/";

const App = () => {
  return (
    <div className="flex justify-center items-center h-100">
      <CssFramework />
      <SplitButton.Primary
        labels={["Collections", "Search", "Select an item at random"]}
        selectedIndex={0}
        onChange={() => console.log("click")}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
