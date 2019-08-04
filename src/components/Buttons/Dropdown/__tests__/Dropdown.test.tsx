import React from "react";
import { mount } from "enzyme";

import DropdownButton from "../index";

describe("DropdownButton", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(
      <DropdownButton
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
