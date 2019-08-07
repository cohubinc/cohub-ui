import React from "react";
import { shallow } from "enzyme";

import Chip from "../index";
it("renders internal Link without crashing", async () => {
  const wrapper = shallow(<Chip>Hi, my name is chip!</Chip>);

  expect(wrapper).toMatchSnapshot();
});
