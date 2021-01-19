import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import { CssFramework, FormatMoney, Statistic } from "../dist";
// import DevSandbox from "./DevSandbox";

const App = () => {
  return (
    <React.Fragment>
      <CssFramework />
      <div>
        <FormatMoney
          shopCurrencyFormat={'<span class="money">${{amount}} AUD</span>'}
          value={6666.5}
        />
      </div>
      <div>
        <FormatMoney
          shopCurrencyFormat={'<span class="money">€{{amount}}</span>'}
          value={74555.5666}
        />
      </div>

      <div>
        <FormatMoney shopCurrencyFormat={"&euro;{{amount}}"} value={"2978.5"} />
      </div>

      <div>
        <FormatMoney shopCurrencyFormat={"&euro;{{amount}}"} value={"2978.5"} />
      </div>

      <div>
        <Statistic
          format="money"
          label="Lookit"
          value="72378.99"
          shopCurrencyFormat={'<span class="money">${{amount}} AUD</span>'}
        />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
