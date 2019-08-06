import * as React from "react";
import * as ReactDOM from "react-dom";
import { CssFramework, FloatingActionButton, Color } from "../dist/";

const App = () => {
  return (
    <div className="flex justify-center items-center h-100">
      <CssFramework />
      <FloatingActionButton
        icon={"back"}
        iconColor={Color.green500}
        size={50}
        backgroundColor={Color.green200}
        elevation={2}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
