import React from "react";
import { mount } from "enzyme";

import { Card } from "dist";

describe("Vertical", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Card.Vertical title="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
