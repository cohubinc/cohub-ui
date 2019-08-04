import React from "react";
import { mount } from "enzyme";
import Ghost from "../index";

describe("Ghost", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Ghost>push me</Ghost>);
    expect(wrapper).toMatchSnapshot();
  });
});
