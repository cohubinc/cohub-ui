import React from "react";
import { mount } from "enzyme";
import { Inputs } from "dist";

describe("Base Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Inputs.Base />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with value without crashing", async () => {
    const wrapper = mount(<Inputs.Base value="test" onChange={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });
});
