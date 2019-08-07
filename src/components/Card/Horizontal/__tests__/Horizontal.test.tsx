import React from "react";
import { mount } from "enzyme";

import Horizontal from "../index";

describe("Horizontal", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Horizontal title="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
