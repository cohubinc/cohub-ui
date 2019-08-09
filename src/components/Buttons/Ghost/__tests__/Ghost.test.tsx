import React from "react";
import { mount } from "enzyme";

import { Buttons } from "dist";

describe("Ghost", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Buttons.Ghost>push me</Buttons.Ghost>);
    expect(wrapper).toMatchSnapshot();
  });
});
