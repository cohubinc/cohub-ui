import React from "react";
import { mount } from "enzyme";

import { Inputs } from "dist";

describe("Decimal", () => {
  it("renders Decimal without crashing", () => {
    const wrapper = mount(
      <Inputs.Decimal input={{ value: 0, onChange: _value => undefined }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
