import React from "react";
import { shallow } from "enzyme";
import Base from "..";

describe("Base", () => {
  it("renders without crashing", async () => {
    const wrapper = shallow(<Base to="/custom/path" />);
    expect(wrapper).toMatchSnapshot();
  });
});
