import React from "react";
import { mount } from "enzyme";
import Base from "..";

describe("Base Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Base />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders with value without crashing", async () => {
    const wrapper = mount(<Base value="test" onChange={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });
});
