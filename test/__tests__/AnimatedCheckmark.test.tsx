import React from "react";
import { mount } from "enzyme";

import { AnimatedCheckmark } from "dist";

describe("AnimatedCheckmark", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<AnimatedCheckmark color="currentcolor" />);

    expect(wrapper).toMatchSnapshot();
  });
});
