import React from "react";
import { mount } from "enzyme";

import { Expander, Typography } from "dist";

it("renders without crashing", async () => {
  const wrapper = mount(
    <Expander
      expandElement={<Typography muted>More</Typography>}
      labelPosition="center"
    >
      <div>test</div>
    </Expander>
  );

  expect(wrapper).toMatchSnapshot();
});
