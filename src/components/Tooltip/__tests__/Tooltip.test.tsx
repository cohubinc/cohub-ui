import React from "react";
import { mount } from "enzyme";

import Tooltip from "../index";

it("renders without crashing", async () => {
  const wrapper = mount(
    <Tooltip content="test content">
      <div>Tooltip reference</div>
    </Tooltip>
  );

  expect(wrapper).toMatchSnapshot();
});
