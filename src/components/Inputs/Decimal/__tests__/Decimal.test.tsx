import React from "react";
import { mount } from "enzyme";

import Decimal from "../index";

describe("Decimal", () => {
  it("renders Decimal without crashing", () => {
    const wrapper = mount(
      <Decimal input={{ value: 0, onChange: _value => undefined }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
