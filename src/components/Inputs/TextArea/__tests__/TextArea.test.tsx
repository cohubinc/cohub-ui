import React from "react";
import { mount } from "enzyme";

import { Inputs } from "dist";

describe("TextArea Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Inputs.TextArea />);

    expect(wrapper).toMatchSnapshot();
  });
});
