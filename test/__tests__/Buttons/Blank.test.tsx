import React from "react";
import { mount } from "enzyme";

import { Buttons } from "dist";

describe("Blank", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Buttons.Blank>push me</Buttons.Blank>);
    expect(wrapper).toMatchSnapshot();
  });
});
