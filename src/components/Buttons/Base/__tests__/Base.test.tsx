import React from "react";
import { shallow } from "enzyme";

import { Buttons } from "dist";

describe("Base Button", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Buttons.Base>push me</Buttons.Base>);
    expect(wrapper).toMatchSnapshot();
  });
});
