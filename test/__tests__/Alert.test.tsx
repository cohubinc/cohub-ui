import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { Alert } from "dist";

let wrapper: ReactWrapper;
beforeEach(() => {
  wrapper = mount(<Alert> Some Alert </Alert>);
});
it("matches snapshot", async () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders its children", async () => {
  expect(wrapper.text().trim()).toBe("Some Alert");
});
