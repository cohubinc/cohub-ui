import React from "react";
import { shallow } from "enzyme";
import Transition from "..";

describe("Transition", () => {
  it("renders show without crashing", async () => {
    const wrapper = shallow(
      <Transition show>
        <span>show me</span>
      </Transition>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without show without crashing", async () => {
    const wrapper = shallow(
      <Transition show={false}>
        <span>don't show me</span>
      </Transition>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
