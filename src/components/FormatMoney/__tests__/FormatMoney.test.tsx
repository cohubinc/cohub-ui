import React from "react";
import { mount } from "enzyme";

import FormatMoney from "../";
it("renders FormatMoney without crashing", async () => {
  const wrapper = mount(<FormatMoney value={0} />);

  expect(wrapper).toMatchSnapshot();
});
