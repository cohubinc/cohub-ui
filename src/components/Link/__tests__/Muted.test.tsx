import React from "react";
import { shallow } from "enzyme";
import Muted from "..";

describe("Muted", () => {
  it("renders without crashing", async () => {
    const wrapper = shallow(<Muted to="/custom/path" />);
    expect(wrapper).toMatchSnapshot();
  });
});
