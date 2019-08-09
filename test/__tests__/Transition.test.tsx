import React from "react";
import { mount } from "enzyme";

import { Transition } from "dist";

describe("Transition", () => {
  it("renders show without crashing", async () => {
    const wrapper = mount(
      <Transition show>
        <span>show me</span>
      </Transition>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without show without crashing", async () => {
    const wrapper = mount(
      <Transition show={false}>
        <span>don't show me</span>
      </Transition>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
