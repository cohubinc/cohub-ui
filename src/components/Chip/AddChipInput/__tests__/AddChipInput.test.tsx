import React from "react";
import { shallow } from "enzyme";

import AddChipInput from "../index";
it("renders AddChipInput without crashing", async () => {
  const wrapper = shallow(<AddChipInput />);

  expect(wrapper).toMatchSnapshot();
});
