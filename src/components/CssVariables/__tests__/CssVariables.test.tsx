import React from "react";
import { mount } from "enzyme";
import CssVariables from "../index";

describe("CSSVariables", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<CssVariables />);

    expect(wrapper).toMatchSnapshot();
  });
});
