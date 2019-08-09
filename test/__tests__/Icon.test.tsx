import React from "react";
import { mount } from "enzyme";

import { Icon, iconNames } from "dist";

describe("Icon", () => {
  iconNames.forEach(name => {
    if (name === "user") {
      return;
    }
    it(`renders ${name} without crashing`, () => {
      const wrapper = mount(<Icon name={name} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
