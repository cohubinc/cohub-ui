import React from "react";
import { shallow } from "enzyme";

import Avatar from "../src/components/Avatar";

it("renders without crashing", async () => {
  const wrapper = shallow(<Avatar src={null} />);

  expect(wrapper).toMatchSnapshot();
});
