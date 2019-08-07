import React from "react";
import { shallow } from "enzyme";

import AttributeList from "../index";
it("renders without crashing", async () => {
  const wrapper = shallow(
    <AttributeList
      header={"test"}
      items={[{ attribute: "test", value: "test", format: "text" }]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
