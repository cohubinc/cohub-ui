import React from "react";
import { mount } from "enzyme";

import { Inputs, StoryHelpers } from "dist";
import { render, fireEvent } from "@testing-library/react";

describe("CheckBox Input", () => {
  it("renders checked without crashing", async () => {
    const wrapper = mount(
      <Inputs.Checkbox
        label="checkBox"
        input={{ value: true } as any}
        id="checkbox_input"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders un-checked without crashing", async () => {
    const wrapper = mount(
      <Inputs.Checkbox
        label="checkBox"
        input={{ value: false }}
        id="checkbox_input"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("toggles on click", () => {
    const { getByLabelText } = render(
      <StoryHelpers.StateContainer defaultState={false}>
        {({ state, setState }) => (
          <Inputs.Checkbox
            label="Checkbox Input"
            key="selected"
            id="checkbox_input"
            input={{
              name: "selected",
              value: !!state,
              onChange: () => setState(!state)
            }}
          />
        )}
      </StoryHelpers.StateContainer>
    );

    expect(getByLabelText("Checkbox Input")).toHaveAttribute(
      "data-checked",
      "false"
    );

    fireEvent.click(getByLabelText("Checkbox Input"));

    expect(getByLabelText("Checkbox Input")).toHaveAttribute(
      "data-checked",
      "true"
    );
  });
});
