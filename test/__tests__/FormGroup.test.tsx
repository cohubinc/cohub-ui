import React from "react";
import { mount } from "enzyme";

import { FormGroup } from "dist";

it("renders without crashing", async () => {
  const wrapper = mount(
    <FormGroup direction="horizontal">
      <div>test</div>
    </FormGroup>
  );

  expect(wrapper).toMatchSnapshot();
});
