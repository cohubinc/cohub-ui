import React from "react";
import { mount } from "enzyme";

import { Card } from "dist";

describe("Horizontal", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Card.Horizontal title="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
