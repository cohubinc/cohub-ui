import React from "react";
import { mount } from "enzyme";

import Vertical from "../index";

describe("Vertical", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Vertical title="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
