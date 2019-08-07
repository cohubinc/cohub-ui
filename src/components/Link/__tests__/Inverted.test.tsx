import React from "react";
import { shallow } from "enzyme";
import Inverted from "..";

describe("Inverted", () => {
  it("renders without crashing", async () => {
    const wrapper = shallow(<Inverted to="/custom/path" />);
    expect(wrapper).toMatchSnapshot();
  });
});
