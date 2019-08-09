import React from "react";
import { mount } from "enzyme";

import { Buttons } from "dist";

describe("DropdownButton", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(
      <Buttons.Dropdown
        options={[
          {
            onClick: () => null,
            label: "Option One"
          },
          {
            onClick: () => null,
            label: "Option Two"
          }
        ]}
      />
    );

    expect(wrapper.exists()).toBe(true);
  });
});
