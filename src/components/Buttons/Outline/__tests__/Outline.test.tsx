import React from "react";
import { mount } from "enzyme";

import Outline from "../index";

describe("Outline Button", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Outline>push me</Outline>);
    expect(wrapper).toMatchSnapshot();
  });
});
