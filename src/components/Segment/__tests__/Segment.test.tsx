import React from "react";
import { mount } from "enzyme";

import { Segment } from "dist";

it("renders without crashing", async () => {
  const wrapper = mount(<Segment>Segment Content...</Segment>);

  expect(wrapper).toMatchSnapshot();
});
