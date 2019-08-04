import React from "react";
import { mount } from "enzyme";

import Text from "../index";

describe("Text", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Text>push me</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
