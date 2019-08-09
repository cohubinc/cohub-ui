import React from "react";
import { mount } from "enzyme";

import { FormatPercent } from "dist";

it("renders FormatPercent without crashing", async () => {
  const wrapper = mount(<FormatPercent value={0} />);

  expect(wrapper).toMatchSnapshot();
});
