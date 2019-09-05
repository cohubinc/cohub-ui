import React from "react";
import { fireEvent, waitForElement } from "@testing-library/react";

import { render } from "../../cohub-testing-library";
import { sleep } from "../utils";

import { Inputs } from "dist";

import { mount } from "enzyme";

describe("Date", () => {
  // it("matches snapshot", async () => {
  //   const wrapper = mount(
  //     <Inputs.Date
  //       label="Date"
  //       appearance="contrast"
  //       input={{
  //         name: "nunyah",
  //         value: "1984-09-09",
  //         onChange: () => null,
  //         onFocus: () => null,
  //         onBlur: () => null
  //       }}
  //       meta={{}}
  //     />
  //   );

  //   expect(wrapper).toMatchSnapshot();
  // });

  // Don't think we need these test b/c they're pretty much duplicates from the DatePickerBase test, but they're here if that proves to be wrong //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  it("Shows a properly formated date on init when at ISO 8601 formated datetime value is passed in", () => {
    const { getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{
          value: "1984-09-09",
          onChange: date => null
        }}
      />
    );
    const input = getByLabelText("Date") as HTMLInputElement;

    expect(input.value).toBe("09-09-1984");
  });

  it("It works when empty value is passed in", () => {
    const { getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: () => null }}
      />
    );
    const input = getByLabelText("Date") as HTMLInputElement;

    expect(input.value).toBe("");
  });

  it("Typing a valid date into input works", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: onChangeFn }}
      />
    );
    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "09091999" } });

    expect(input.value).toBe("09-09-1999");

    await sleep();

    expect(onChangeFn.mock.calls.length).toBe(1);
    expect(onChangeFn.mock.calls[0][0]).toBe("1999-09-09");
  });

  it("Typing non-numeric chars doesn't get you very far", () => {
    const { getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: () => null }}
      />
    );
    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "ABCD@#$%{}09" } });

    expect(input.value).toBe("09-DD-YYYY");
  });

  it("Typing an out of range year doesn't call the onChange callback", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: onChangeFn }}
      />
    );
    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "09091900" } });

    await sleep();

    expect(onChangeFn.mock.calls.length).toBe(0);
  });

  it("Typing an out of range date triggers the error state", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: onChangeFn }}
      />
    );
    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "22011999" } });

    expect(input).toBeInvalid();
  });

  it("Picker isn't visible on init", async () => {
    const { getByTestId } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "1984-09-09", onChange: () => null }}
      />
    );

    expect(getByTestId("pickerContainer").getAttribute("aria-hidden")).toBe(
      "true"
    );
  });

  it("Picker is visible after input is focused", async () => {
    const { getByTestId, getByLabelText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "1984-09-09", onChange: () => null }}
      />
    );

    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.focus(input);

    await sleep();

    expect(getByTestId("pickerContainer").getAttribute("aria-hidden")).toBe(
      "false"
    );
  });

  it("Selecting a month from the month picker updates the input value correctly", async () => {
    const { getByLabelText, findBtnByText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: () => null }}
      />
    );

    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.focus(input);

    const mayBtn = await findBtnByText("May");

    mayBtn.click();

    expect(input.value).toBe("05-DD-YYYY");
  });

  it("Selecting a month and then a day from the month picker updates the input value correctly", async () => {
    const { getByLabelText, findBtnByText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: () => null }}
      />
    );

    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.focus(input);

    const mayBtn = await findBtnByText("May");

    mayBtn.click();

    const daySevenBtn = await findBtnByText("07");

    daySevenBtn.click();

    expect(input.value).toBe("05-07-YYYY");
  });

  it("Selecting a full date from the picker UI updates the input value correctly and call the onChange callback", async () => {
    const onChangeFn = jest.fn(isoDateTime => isoDateTime);
    const { getByLabelText, findBtnByText } = render(
      <Inputs.Date
        label="Date"
        appearance="contrast"
        input={{ value: "", onChange: onChangeFn }}
      />
    );

    const input = getByLabelText("Date") as HTMLInputElement;

    fireEvent.focus(input);

    const mayBtn = await findBtnByText("May");

    mayBtn.click();

    const daySevenBtn = await findBtnByText("07");

    daySevenBtn.click();

    const yearBtn = await findBtnByText("2019");

    yearBtn.click();

    await sleep();

    expect(onChangeFn.mock.calls.length).toBe(1);
    expect(onChangeFn.mock.calls[0][0]).toBe("2019-05-07");
  });
});
