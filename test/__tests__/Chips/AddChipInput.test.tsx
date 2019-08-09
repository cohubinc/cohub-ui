import React from "react";
import { shallow } from "enzyme";

import { Chip } from "dist";

it("renders AddChipInput without crashing", async () => {
  const wrapper = shallow(<Chip.Add />);

  expect(wrapper).toMatchSnapshot();
});
