import React from "react";
import { mount } from "enzyme";

import { Statistic } from "dist";

it("renders without crashing", async () => {
  const wrapper = mount(
    <Statistic label="test stat" value={100} format="number" />
  );

  expect(wrapper).toMatchSnapshot();
});
