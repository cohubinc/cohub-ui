import React from "react";
import { mount } from "enzyme";

import Money from "../index";

describe("Money", () => {
  it("renders Money without crashing", () => {
    const wrapper = mount(
      <Money input={{ value: 0, onChange: _value => undefined }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
