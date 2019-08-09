import React from "react";
import { shallow } from "enzyme";

import { Tab } from "dist";

it("renders without crashing", async () => {
  const wrapper = shallow(<Tab useRedux={false} title="test" />);

  expect(wrapper).toMatchSnapshot();
});
