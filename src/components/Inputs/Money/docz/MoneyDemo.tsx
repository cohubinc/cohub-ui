import React, { Component } from "react";
import MoneyInput from "../";
import DoczStateCtrl from "src/components/Docz/DoczStateCtrl";
import Divider from "src/components/Divider";

interface IState {
  value: number;
}
export default class MoneyDemo extends Component<any, IState> {
  state: IState = { value: 23.12345 };

  render() {
    const { value } = this.state;

    return (
      <div>
        <DoczStateCtrl>
          {({ on: extendedPrecision }) => (
            <div>
              <div className="mb-1">
                <i>(toggle extendedPrecision prop on and off)</i>
              </div>

              <MoneyInput
                label="Amount"
                extendedPrecision={extendedPrecision}
                input={{ value, onChange: this.handleChange }}
              />
            </div>
          )}
        </DoczStateCtrl>

        <Divider marginSize={3} />

        <MoneyInput
          extendedPrecision
          appearance="contrast"
          label="Amount"
          input={{ value, onChange: this.handleChange }}
        />
      </div>
    );
  }

  private handleChange = (value: number) => this.setState({ value });
}
