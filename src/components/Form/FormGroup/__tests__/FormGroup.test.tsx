import React from "react";
import { mount } from "enzyme";

import FormGroup from "dist/components/Form/FormGroup";

it("renders without crashing", async () => {
  const wrapper = mount(
    <FormGroup>
      <div>test</div>
    </FormGroup>
  );

  expect(wrapper).toMatchSnapshot();
});
