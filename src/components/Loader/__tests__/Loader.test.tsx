import React from "react";
import { mount } from "enzyme";

import Loader from "../index";

describe("Loader", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders fullscreen version", async () => {
    const wrapper = mount(<Loader fullScreen />);

    expect(wrapper).toMatchSnapshot();
  });
});
