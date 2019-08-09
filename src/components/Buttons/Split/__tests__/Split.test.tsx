import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { Buttons } from "dist";

describe("Split", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <Buttons.Split
        labels={["one", "two"]}
        selectedIndex={1}
        onChange={() => {
          "noop";
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
