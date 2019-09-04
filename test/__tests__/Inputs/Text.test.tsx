import React from "react";
import { mount } from "enzyme";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Inputs } from "dist";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-qa" });

describe("Text Input", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<Inputs.Text />);

    expect(wrapper).toMatchSnapshot();
  });

  it("receives text", () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Inputs.Text data-qa="textInputId" />
    );

    userEvent.type(getByTestId("textInputId"), "Hello, World!");

    expect(getByTestId("textInputId")).toHaveValue("Hello, World!");
  });
});
