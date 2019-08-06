import * as React from "react";
import * as ReactDOM from "react-dom";
import { Buttons, Typography, Icon, CssFramework } from "../dist";

const App = () => {
  return (
    <div>
      <CssFramework />
      <div>
        <Typography.HeadingLarge>Dat Button</Typography.HeadingLarge>
      </div>

      <div>
        <Buttons.Primary>Dat Button</Buttons.Primary>
      </div>

      <div>
        <Icon.Eye />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
