import React from "react";
import { mount } from "enzyme";

import { Backdrop } from "dist";

describe("Backdrop component", () => {
  it("renders", async () => {
    const wrapper = mount(<Backdrop open={true} focusTrapped={false} />);

    expect(wrapper).toMatchSnapshot();
  });
});
