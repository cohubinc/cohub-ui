import React from "react";
import { mount } from "enzyme";
import Select from "..";

describe("Select Input", () => {
  it("renders checked without crashing", async () => {
    const wrapper = mount(
      <Select
        label="Select"
        input={
          {
            value: "option1",
            onChange: () => null
          } as any
        }
        meta={{}}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
          { label: "Option 4", value: "option4" }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
