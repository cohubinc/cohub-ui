import React from "react";
import { mount } from "enzyme";

import { Inputs } from "dist";

describe("Toggle Input", () => {
  it("renders checked without crashing", async () => {
    const wrapper = mount(
      <Inputs.Toggle
        input={{
          name: "toggle-input",
          onBlur: () => ({} as any),
          onFocus: () => ({} as any),
          onChange: () => ({} as any),
          value: true
        }}
        meta={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders unchecked without crashing", async () => {
    const wrapper = mount(
      <Inputs.Toggle
        input={{
          name: "toggle-input",
          onBlur: () => ({} as any),
          onFocus: () => ({} as any),
          onChange: () => ({} as any),
          value: false
        }}
        meta={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
