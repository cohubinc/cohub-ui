import React from "react";
import { shallow } from "enzyme";

import Base from "../index";

describe("Base Button", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Base>push me</Base>);
    expect(wrapper).toMatchSnapshot();
  });
});
