import React from "react";
import { mount } from "enzyme";

import { FormatWeight } from "dist";

it("renders FormatWeight without crashing", async () => {
  const wrapper = mount(<FormatWeight value={0} />);

  expect(wrapper).toMatchSnapshot();
});
