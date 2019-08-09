import React from "react";
import { mount } from "enzyme";

import { Buttons } from "dist";

describe("Outline Button", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Buttons.Outline>push me</Buttons.Outline>);
    expect(wrapper).toMatchSnapshot();
  });
});
