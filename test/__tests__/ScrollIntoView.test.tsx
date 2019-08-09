import React from "react";
import { mount } from "enzyme";

import { ScrollIntoView } from "dist";

describe("ScrollIntoView", () => {
  it("renders", async () => {
    const wrapper = mount(<ScrollIntoView />);

    expect(wrapper).toMatchSnapshot();
  });
});
