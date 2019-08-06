import React from "react";
import { mount } from "enzyme";
import Text from "../";

describe("Text Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Text />);

    expect(wrapper).toMatchSnapshot();
  });
});
