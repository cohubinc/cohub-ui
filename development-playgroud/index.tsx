import * as React from "react";
import * as ReactDOM from "react-dom";
import { CssFramework, Color, Buttons, Typography } from "../dist/";

const App = () => {
  return (
    <div className="flex justify-center items-center h-100">
      <CssFramework />
      <Buttons.FloatingAction
        icon={"back"}
        iconColor={Color.green500}
        size={50}
        backgroundColor={Color.green200}
        elevation={8}
        type="submit"
      />
      <Typography fontFamily="MillerDisplay">Test</Typography>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
