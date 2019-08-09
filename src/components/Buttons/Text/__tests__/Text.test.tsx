import React from "react";
import { mount } from "enzyme";

import { Buttons } from "dist";

describe("Text", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Buttons.Text>push me</Buttons.Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
