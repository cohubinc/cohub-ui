import React from "react";
import { mount } from "enzyme";
import { render, configure, fireEvent } from "@testing-library/react";

import { Inputs, StoryHelpers } from "dist";

configure({ testIdAttribute: "data-qa" });

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

  it("toggles on click", () => {
    const { getByTestId, getByLabelText } = render(
      <StoryHelpers.StateContainer defaultState={false}>
        {({ state, setState }) => (
          <Inputs.Toggle
            data-qa="toggleInput"
            label="Toggle Test Label"
            input={{
              value: state,
              onChange: setState
            }}
          />
        )}
      </StoryHelpers.StateContainer>
    );

    expect(getByTestId("toggleInput")).toHaveAttribute("data-checked", "false");

    fireEvent.click(getByLabelText("Toggle Test Label"));

    expect(getByTestId("toggleInput")).toHaveAttribute("data-checked", "true");
  });
});
