import React from "react";
import { mount } from "enzyme";

import IconWrapper from "../index";

it("renders without crashing", async () => {
  const wrapper = mount(
    <IconWrapper name="add">{() => <div>test</div>}</IconWrapper>
  );

  expect(wrapper).toMatchSnapshot();
});
