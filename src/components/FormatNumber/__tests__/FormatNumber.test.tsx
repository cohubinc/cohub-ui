import React from "react";
import { mount } from "enzyme";

import FormatNumber from "../";
it("renders FormatNumber without crashing", async () => {
  const wrapper = mount(<FormatNumber value={0} />);

  expect(wrapper).toMatchSnapshot();
});
