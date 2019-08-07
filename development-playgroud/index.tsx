import * as React from "react";
import * as ReactDOM from "react-dom";
import { CssFramework, Avatar } from "../dist/";

const App = () => {
  return (
    <div className="flex justify-center items-center h-100">
      <CssFramework />
      <Avatar></Avatar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
