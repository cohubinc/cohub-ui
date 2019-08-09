import React from "react";
import { mount } from "enzyme";

import { FormatNumber } from "dist";

it("renders FormatNumber without crashing", async () => {
  const wrapper = mount(<FormatNumber value={0} />);

  expect(wrapper).toMatchSnapshot();
});
