import React from "react";
import { mount } from "enzyme";

import { RenderBoolean } from "dist";

it("matches snapshot", async () => {
  const wrapper = mount(<RenderBoolean value={true} />);

  expect(wrapper).toMatchSnapshot();
});
