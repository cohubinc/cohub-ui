import React from "react";
import { mount } from "enzyme";
import { Inputs } from "dist";

describe("Text Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Inputs.Text />);

    expect(wrapper).toMatchSnapshot();
  });
});
