import React from "react";
import { mount } from "enzyme";

import { Chip } from "dist";

it("renders internal Link without crashing", async () => {
  const wrapper = mount(<Chip>Hi, my name is chip!</Chip>);

  expect(wrapper).toMatchSnapshot();
});
