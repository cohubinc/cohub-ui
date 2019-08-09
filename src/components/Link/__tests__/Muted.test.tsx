import React from "react";
import { shallow } from "enzyme";
import { Link } from "dist";

describe("Muted", () => {
  it("renders without crashing", async () => {
    const wrapper = shallow(<Link.Muted to="/custom/path" />);
    expect(wrapper).toMatchSnapshot();
  });
});
