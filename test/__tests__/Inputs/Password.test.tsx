import React from "react";
import { mount } from "enzyme";
import { Inputs } from "dist";

describe("Password Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Inputs.Password />);

    expect(wrapper).toMatchSnapshot();
  });
});
