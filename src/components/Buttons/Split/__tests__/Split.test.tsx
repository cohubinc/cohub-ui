import React from "react";
import { mount, ReactWrapper } from "enzyme";

import SplitButtons from "../index";

let wrapper: ReactWrapper;
beforeEach(() => {
  wrapper = mount(
    <SplitButtons
      labels={["one", "two"]}
      selectedIndex={1}
      onChange={() => {
        "noop";
      }}
    />
  );
});

it("renders without crashing", async () => {
  expect(wrapper).toMatchSnapshot();
});
