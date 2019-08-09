import React from "react";
import { shallow } from "enzyme";

import { Tabs } from "dist";

it("renders without crashing", async () => {
  const wrapper = shallow(<Tabs.Tab useRedux={false} title="test" />);

  expect(wrapper).toMatchSnapshot();
});
