import React from "react";
import { mount } from "enzyme";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Inputs } from "dist";

describe("Text Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Inputs.Text />);

    expect(wrapper).toMatchSnapshot();
  });

  it("receives text", () => {
    const { getByLabelText } = render(
      <Inputs.Text data-qa="textInputId" label="Text Label" id="text_input" />
    );

    expect(getByLabelText("Text Label")).toBeEmpty();

    userEvent.type(getByLabelText("Text Label"), "Hello, World!");

    expect(getByLabelText("Text Label")).toHaveValue("Hello, World!");
  });
});
