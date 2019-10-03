import React from "react";
import { mount } from "enzyme";

import { Opacifier } from "dist";

describe("Opacifier", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Opacifier />);

    expect(wrapper).toMatchSnapshot();
  });
});
