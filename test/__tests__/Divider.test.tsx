import React from "react";
import { mount } from "enzyme";

import { Divider } from "dist";

it("renders without crashing", async () => {
  const wrapper = mount(<Divider />);

  expect(wrapper).toMatchSnapshot();
});
