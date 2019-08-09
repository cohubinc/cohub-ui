import React from "react";
import { mount } from "enzyme";

import { Inputs } from "dist";

describe("Money", () => {
  it("renders Money without crashing", () => {
    const wrapper = mount(
      <Inputs.Money input={{ value: 0, onChange: _value => undefined }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
