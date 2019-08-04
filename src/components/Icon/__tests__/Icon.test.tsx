import React from "react";
import { mount } from "enzyme";

import Icon from "../index";
import { iconNames } from "../Icons";

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
