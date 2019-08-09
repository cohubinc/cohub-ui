import React from "react";
import { shallow } from "enzyme";

import { Tabs, Tab } from "dist";

it("renders without crashing", async () => {
  const wrapper = shallow(
    <Tabs>
      <Tab title="test" />
      <Tab title="Test 2" />
    </Tabs>
  );

  expect(wrapper).toMatchSnapshot();
});
