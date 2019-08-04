import React from "react";
import { mount } from "enzyme";

import Blank from "../index";

describe("Blank", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Blank>push me</Blank>);
    expect(wrapper).toMatchSnapshot();
  });
});
