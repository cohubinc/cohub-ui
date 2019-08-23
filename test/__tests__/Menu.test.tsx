import React from "react";
import { mount } from "enzyme";

import { Menu } from "dist";

it("renders without crashing", async () => {
  const wrapper = mount(
    <Menu
      appearance="light"
      items={[
        { label: "Sales Orders", action: null },
        { label: "Purchase Orders", action: null }
      ]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
