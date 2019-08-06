import React from "react";
import { mount } from "enzyme";
import CheckBox from "..";

describe("CheckBox Input", () => {
  it("renders checked without crashing", async () => {
    const wrapper = mount(
      <CheckBox label="checkBox" input={{ value: true } as any} meta={{}} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders un-checked without crashing", async () => {
    const wrapper = mount(
      <CheckBox label="checkBox" input={{ value: false } as any} meta={{}} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
