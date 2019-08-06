import React from "react";
import { mount } from "enzyme";
import TextArea from "..";

describe("TextArea Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<TextArea />);

    expect(wrapper).toMatchSnapshot();
  });
});
