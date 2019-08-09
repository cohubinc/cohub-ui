import React from "react";
import { shallow } from "enzyme";

import { Tabs } from "dist";

it("renders without crashing", async () => {
  const wrapper = shallow(
    <Tabs>
      <Tabs.Tab title="test" />
      <Tabs.Tab title="Test 2" />
    </Tabs>
  );

  expect(wrapper).toMatchSnapshot();
});
