import React from "react";
import { mount } from "enzyme";
import AnimatedCheckmark from "../";

describe("AnimatedCheckmark", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<AnimatedCheckmark />);

    expect(wrapper).toMatchSnapshot();
  });
});
